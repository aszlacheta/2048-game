import useIsWinner from "../useIsWinner";

describe('useIsWinner hook', () => {

    const testCases = [
        [
            [
                { x: 0, y: 1, z: -1, value: 2048 },
                { x: -1, y: 1, z: 0, value: 0 },
                { x: 1, y: 0, z: -1, value: 0 },
            ],
            true,
        ],
        [
            [
                { x: 0, y: 1, z: -1, value: 4 },
                { x: -1, y: 1, z: 0, value: 0 },
                { x: 1, y: 0, z: -1, value: 0 },
            ],
            false,
        ],
        [
            [
                { x: 0, y: 1, z: -1, value: 3000 },
                { x: -1, y: 1, z: 0, value: 0 },
                { x: 1, y: 0, z: -1, value: 0 },
            ],
            true,
        ],
    ];

    test.each(testCases)('should say if it is a win', (cells, expected) => {
        const result = useIsWinner(cells, 2048);
        expect(result).toEqual(expected);
    });
});