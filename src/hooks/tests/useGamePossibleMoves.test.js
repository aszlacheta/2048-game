import useGamePossibleMoves from "../useGamePossibleMoves";

describe('useGamePossibleMoves hook', () => {

    it('should return number of possible moves if moves are provided', () => {
        const cells = [
            { x: -1, y: 1, z: 0, value: 0 },
            { x: 1, y: 0, z: -1, value: 0 },
        ];
        const moves = [
            (cells) => cells.map(cell => cell.x = 3),
            (cells) => cells.map(cell => cell.y = 4),
        ];
        const expected = {
            possibleMovesNumber: 2,
            hasMoreMoves: true,
        }

        const result = useGamePossibleMoves(cells, moves);

        expect(result).toEqual(expected);
    });

    it('should return 0 if no moves where provided ', () => {
        const cells = [
            { x: -1, y: 1, z: 0, value: 0 },
            { x: 1, y: 0, z: -1, value: 0 },
        ];
        const moves = [];
        const expected = {
            possibleMovesNumber: 0,
            hasMoreMoves: false,
        }

        const result = useGamePossibleMoves(cells, moves);

        expect(result).toEqual(expected);
    });

    it('should return 0 if no cells where provided ', () => {
        const cells = [];
        const moves = [
            (cells) => cells.map(cell => cell.x = 3),
            (cells) => cells.map(cell => cell.y = 4),
        ];
        const expected = {
            possibleMovesNumber: 0,
            hasMoreMoves: false,
        }

        const result = useGamePossibleMoves(cells, moves);

        expect(result).toEqual(expected);
    });

    it('should return 0 if no moves do not change cells', () => {
        const cells = [];
        const moves = [
            (cells) => cells,
            (cells) => cells, 
        ];
        const expected = {
            possibleMovesNumber: 0,
            hasMoreMoves: false,
        }

        const result = useGamePossibleMoves(cells, moves);

        expect(result).toEqual(expected);
    });

});