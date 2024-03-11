import * as R from 'ramda';

/**
 * Hook used to provide number of possible moves 
 * @param {Array<Object>} cells List of cells with values and position
 * @param {Array<Function>} moves List of possible moves represented by Javascript functions
 * @returns {{possibleMovesNumber, hasMoreMoves}} Object with attributes:
 *      1) possibleMovesNumber {Number} number of possible moves. This number will not be higher than number of all possible moves
 *      2) hasMoreMoves {Boolean} flag that determines if game provides more moves
 */
export default function useGamePossibleMoves(cells, moves) {

    const hasMoves = (move) => {
        const copy = R.clone(cells);
        const difference = R.difference(cells, move(copy));

        return R.isEmpty(difference) ? 0 : 1;
    }
    const checkStatus = () => {
        let possibleMoves = 0;

        Object.values(moves).forEach(move => {
            possibleMoves += hasMoves(move);
        });

        return possibleMoves;
    }

    const possibleMovesNumber = checkStatus();

    return {
        possibleMovesNumber,
        hasMoreMoves: possibleMovesNumber > 0,
    };
}