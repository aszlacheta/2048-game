import useGameStatus from "../useGameStatus";

describe('useGameStatus hook', () => {

    const testCases = [
        [true, 'playing'],
        [false, 'game-over'],
        ['a', 'game-over'],
        [-1, 'game-over'],
        [undefined, 'game-over'],
        [null, 'game-over'],
    ]
    test.each(testCases)('should return proper status', (hasMoreMoves, expected) => {
        const result = useGameStatus(hasMoreMoves);
        expect(result).toEqual(expected);
    });

});