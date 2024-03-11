import useGameStatus from "../useGameStatus";

describe('useGameStatus hook', () => {

    const testCases = [
        [true, false, 'playing'],
        [false, false, 'game-over'],
        ['a', false, 'game-over'],
        [-1, false, 'game-over'],
        [undefined, false, 'game-over'],
        [null, false, 'game-over'],
        [true, true, 'win'],

    ]
    test.each(testCases)('should return proper status', (hasMoreMoves, isWinner, expected) => {
        const result = useGameStatus(hasMoreMoves, isWinner);
        expect(result).toEqual(expected);
    });

});