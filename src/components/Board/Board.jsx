import React, { useEffect, useState } from "react";
import { getCells } from "../../api";
import Hexagon from "../Hexagon/Hexagon";
import * as R from 'ramda';
import useKeyUp from "../../hooks/useKeyUp";
import GameStatus from "../GameStatus/GameStatus";
import useGamePossibleMoves from "../../hooks/useGamePossibleMoves";
import useShiftFactory from "../../hooks/useShiftFactory";
import PossibleMoves from "../PossibleMoves/PossibleMoves";
import useIsWinner from "../../hooks/useIsWinner";

import './Board.scss';

/**
 * Component responsible for rendering whole board
 * 
 * @param {
 *  {
 *      hostname: string | undefined; 
 *      port: string | undefined; 
 *      radius: string | undefined; 
 *      protocol: string | undefined;
 *      defaults: Object;
 *  }} props React props that define:
 *          1) connection to the API (hostname, port, protocol) 
 *          2) radius as level of the game
 *          3) defaults - contains level of the game and initial board
 * @returns {ReactElement} board with hexagons
 */
export default function Board({ hostname, protocol, radius, port, defaults }) {

    const [cells, setCells] = useState(defaults.board);
    const shiftNorth = useShiftFactory('x');
    const shiftNorthWest = useShiftFactory('z');
    const shiftNorthEast = useShiftFactory('y');
    const shiftSouth = useShiftFactory('x', true);
    const shiftSouthWest = useShiftFactory('y', true);
    const shiftSouthEast = useShiftFactory('z', true);
    const { possibleMovesNumber, hasMoreMoves } = useGamePossibleMoves(cells, { shiftNorth, shiftNorthEast, shiftNorthWest, shiftSouth, shiftSouthEast, shiftSouthWest });
    const isWinner = useIsWinner(cells, 2048);

    useEffect(() => {
        clearBoard();
        loadNewCells();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useKeyUp('w', () => shiftAndLoadNew(() => shiftNorth(cells), cells));
    useKeyUp('s', () => shiftAndLoadNew(() => shiftSouth(cells), cells));
    useKeyUp('q', () => shiftAndLoadNew(() => shiftNorthWest(cells), cells));
    useKeyUp('a', () => shiftAndLoadNew(() => shiftSouthWest(cells), cells));
    useKeyUp('e', () => shiftAndLoadNew(() => shiftNorthEast(cells), cells));
    useKeyUp('d', () => shiftAndLoadNew(() => shiftSouthEast(cells), cells));

    /**
     * Clears the board by reload with default, initial values
     */
    const clearBoard = () => {
        setCells(defaults.board);
    }

    /**
     * Loads new cells from API
     */
    const loadNewCells = () => {
        getCells(getNonEmptyCells(cells), radius, hostname, port, protocol)
            .then(({ data }) => updateValuesFromApi(data));
    }

    /**
     * Responsible for returning list of non-empty cells - cells that have value greater than 0
     * @param {Array<Object>} cells list of cells
     * @returns {Array<Object>} list of cells with value greater than 0
     */
    const getNonEmptyCells = (cells) => R.reject(R.propEq('value', 0))(cells) || [];

    /**
     * Used to shift data based on given move (i.e. move to north) 
     * and load new cells if game is not over 
     * as well as when there where some changes on the board made by last move made
     * @param {Function} shiftCallback move represented by shift function
     * @param {Array<Object>} cells list of cells
     */
    const shiftAndLoadNew = (shiftCallback, cells = []) => {
        const copy = R.clone(cells);

        if (!isWinner) {
            const data = shiftCallback();

            if (hasMoreMoves) {
                if (!R.compose(R.isEmpty, R.difference)(data, copy)) {
                    loadNewCells();
                }
            }
        }
    }

    /**
     * Method used to update given model with the values from the API
     * @param {Array<Object>} data list of cells to add to the view
     */
    const updateValuesFromApi = (data) => {
        const copy = R.clone(cells);

        data.forEach(({ x, y, z, value }) => {
            const pred = R.whereEq({ x, y, z })
            const index = R.findIndex(pred)(cells);

            if (index >= 0) {
                copy[index] = { x, y, z, value };
            }
        });

        setCells(copy);
    }

    return (
        <div className="container">
            <div className="statuses">
                <GameStatus hasMoreMoves={hasMoreMoves} isWinner={isWinner} />
                <PossibleMoves number={possibleMovesNumber} maxMoves={6} />
            </div>

            <div className="board" data-level={radius}>
                {cells.map((cell, index) =>
                    <Hexagon
                        key={index}
                        value={cell?.value}
                        x={cell?.x}
                        y={cell?.y}
                        z={cell?.z}
                    />)}
            </div>
        </div>
    )
}