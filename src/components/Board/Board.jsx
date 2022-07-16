import { useEffect, useState } from "react";
import { getCells } from "../../api";
import Hexagon from "../Hexagon/Hexagon";
import * as R from 'ramda';

import './Board.scss';
import useKeyUp from "../../hooks/useKeyUp";
import GameStatus, { GAME_STATUS } from "../GameStatus/GameStatus";

export default function Board() {

    const EMPTY_BOARD = [
        { x: 0, y: 1, z: -1, value: 0 },
        { x: -1, y: 1, z: 0, value: 0 },
        { x: 1, y: 0, z: -1, value: 0 },
        { x: 0, y: 0, z: 0, value: 0 },
        { x: -1, y: 0, z: 1, value: 0 },
        { x: 1, y: -1, z: 0, value: 0 },
        { x: 0, y: -1, z: 1, value: 0 },
    ];

    const [cells, setCells] = useState(EMPTY_BOARD);
    const [status, setStatus] = useState(GAME_STATUS.gameOver);
    const [possibleMoves, setPossibleMoves] = useState(0);

    useEffect(() => {
        clearBoard();
        addNewCells();
        // eslint-disable-next-line
    }, [])

    const addNewCells = () => {
        getCells(getExistingCells(cells)).then(({ data }) => {
            update(data);
        });
    }

    useEffect(useKeyUp('w', () => shiftAndUpdate(() => shiftNorth(cells))), [cells, status]);
    useEffect(useKeyUp('s', () => shiftAndUpdate(() => shiftSouth(cells))), [cells, status]);
    useEffect(useKeyUp('q', () => shiftAndUpdate(() => shiftNorthWest(cells))), [cells, status]);
    useEffect(useKeyUp('a', () => shiftAndUpdate(() => shiftSouthWest(cells))), [cells, status]);
    useEffect(useKeyUp('e', () => shiftAndUpdate(() => shiftNorthEast(cells))), [cells, status]);
    useEffect(useKeyUp('d', () => shiftAndUpdate(() => shiftSouthEast(cells))), [cells, status]);

    useEffect(() => {
        const status = checkStatus(cells);
        setStatus(status);
    }, [cells]);

    const getExistingCells = (cells) => cells.filter(cell => cell.value !== 0) || [];

    const clearBoard = () => {
        setCells(EMPTY_BOARD);
    }

    const shiftAndUpdate = (callback) => {
        const data = callback();

        if (status === GAME_STATUS.playing) {
            update(data);
            addNewCells();
        }
    }

    const update = (data, updateData = true) => {
        const shallowCopyCells = [...cells];

        data.forEach(({ x, y, z, value }) => {
            const pred = R.whereEq({ x, y, z })
            const index = R.findIndex(pred)(cells);

            if (index >= 0) {
                shallowCopyCells[index] = { x, y, z, value };
            }
        });

        if (updateData) {
            setCells(shallowCopyCells);
        }

        return shallowCopyCells;
    }

    const shiftNorth = (cells) => {
        const groupByX = R.groupBy(cell => cell?.x);
        const groupedByX = groupByX(cells);

        shift(groupedByX);

        return Object.values(groupedByX).flat();
    }

    const shiftSouth = (cells) => {
        const groupByX = R.groupBy(cell => cell?.x);
        const groupedByX = groupByX(cells);

        reverseArraysInObjects(groupedByX);
        shift(groupedByX);
        reverseArraysInObjects(groupedByX);

        return Object.values(groupedByX).flat();
    }

    const shiftNorthWest = (cells) => {
        const groupByZ = R.groupBy(cell => cell?.z);
        const groupedByZ = groupByZ(cells);

        shift(groupedByZ);

        return Object.values(groupedByZ).flat();
    }

    const shiftSouthWest = (cells) => {
        const groupByY = R.groupBy(cell => cell?.y);
        const groupedByY = groupByY(cells);

        reverseArraysInObjects(groupedByY);
        shift(groupedByY);
        reverseArraysInObjects(groupedByY);

        return Object.values(groupedByY).flat();
    }

    const shiftNorthEast = (cells) => {
        const groupByY = R.groupBy(cell => cell?.y);
        const groupedByY = groupByY(cells);

        shift(groupedByY);

        return Object.values(groupedByY).flat();
    }

    const shiftSouthEast = (cells) => {
        const groupByZ = R.groupBy(cell => cell?.z);
        const groupedByZ = groupByZ(cells);

        reverseArraysInObjects(groupedByZ);
        shift(groupedByZ);
        reverseArraysInObjects(groupedByZ);

        return Object.values(groupedByZ).flat();
    }

    const shift = (groupedBy) => {
        Object.keys(groupedBy).forEach(x => {
            let rowByX = groupedBy[x];

            // filter zeros
            rowByX = filterZero(rowByX);

            // merge
            rowByX.forEach((cell, index) => {
                if (index + 1 < rowByX.length && cell.value === rowByX[index + 1].value) {
                    rowByX[index].value = 2 * cell.value;
                    rowByX[index + 1].value = 0;
                }
            });

            // filter zeros again
            rowByX = filterZero(rowByX);

            // update values
            groupedBy[x].forEach((cell, index) => {
                groupedBy[x][index].value = rowByX[index]?.value || 0;
            })
        })

        return groupedBy;
    }

    const filterZero = (array) => array.filter(cell => cell?.value !== 0);

    const reverseArraysInObjects = (array) => {
        Object.keys(array).forEach(x => {
            array[x].reverse();
        });
        return array;
    }

    const checkStatus = (cells) => {
        //TODO
        let shallowCopyCells = R.clone(cells);
        let possibleMoves = 0;

        let data = shiftNorth(shallowCopyCells);
        let a = R.difference(cells, data);
        if (a?.length > 0) {
            possibleMoves++;
        }

        shallowCopyCells = R.clone(cells);
        data = shiftNorthEast(shallowCopyCells);
        a = R.difference(cells, data);
        if (a.length > 0) {
            possibleMoves++;
        }


        shallowCopyCells = R.clone(cells);
        data = shiftNorthWest(shallowCopyCells);
        a = R.difference(cells, data);
        if (a.length > 0) {
            possibleMoves++;
        }


        shallowCopyCells = R.clone(cells);
        data = shiftSouth(shallowCopyCells);
        a = R.difference(cells, data);
        if (a.length > 0) {
            possibleMoves++;
        }


        shallowCopyCells = R.clone(cells);
        data = shiftSouthEast(shallowCopyCells);
        a = R.difference(cells, data);
        if (a.length > 0) {
            possibleMoves++;
        }


        shallowCopyCells = R.clone(cells);
        data = shiftSouthWest(shallowCopyCells);
        a = R.difference(cells, data);
        if (a.length > 0) {
            possibleMoves++;
        }

        if (possibleMoves > 0) {
            setPossibleMoves(possibleMoves);
            return GAME_STATUS.playing;
        } else

        setPossibleMoves(0);
            return GAME_STATUS.gameOver;
    }

    return (
        <div className="container">

            <GameStatus status={status} />
            <div>Possible moves {possibleMoves}</div>

            <div className="board">
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