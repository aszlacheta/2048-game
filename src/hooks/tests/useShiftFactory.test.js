import useShiftFactory from "../useShiftFactory";

describe('useShiftFactory hook', () => {

    it('should shift to north', () => {
        const cells = [
            { x: 0, y: 1, z: -1, value: 0 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 0, y: -1, z: 1, value: 2 },
        ];
        const axis = 'x';
        const shouldReverse = false;
        const expected = [
            { x: 0, y: 1, z: -1, value: 4 },
            { x: 0, y: 0, z: 0, value: 0 },
            { x: 0, y: -1, z: 1, value: 0 },
        ];

        const factory = useShiftFactory(axis,shouldReverse);
        const result = factory(cells);

        expect(result).toEqual(expected);
    });

    it('should shift to south', () => {
        const cells = [
            { x: 0, y: 1, z: -1, value: 0 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 0, y: -1, z: 1, value: 2 },
        ];
        const axis = 'x';
        const shouldReverse = true;
        const expected = [
            { x: 0, y: 1, z: -1, value: 0 },
            { x: 0, y: 0, z: 0, value: 0 },
            { x: 0, y: -1, z: 1, value: 4 },
        ];

        const factory = useShiftFactory(axis,shouldReverse);
        const result = factory(cells);

        expect(result).toEqual(expected);
    });

    it('should shift to north-west', () => {
        const cells = [
            { x: -1, y: 1, z: 0, value: 0 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 1, y: -1, z: 0, value: 2 },
        ];
        const axis = 'z';
        const shouldReverse = false;
        const expected = [
            { x: -1, y: 1, z: 0, value: 4 },
            { x: 0, y: 0, z: 0, value: 0 },
            { x: 1, y: -1, z: 0, value: 0 },
        ];

        const factory = useShiftFactory(axis,shouldReverse);
        const result = factory(cells);

        expect(result).toEqual(expected);
    });
    
    it('should shift to north-east', () => {
        const cells = [
            { x: 1, y: 0, z: -1, value: 0 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: -1, y: 0, z: 1, value: 2 },
        ];
        const axis = 'y';
        const shouldReverse = false;
        const expected = [
            { x: 1, y: 0, z: -1, value: 4 },
            { x: 0, y: 0, z: 0, value: 0 },
            { x: -1, y: 0, z: 1, value: 0 },
        ];

        const factory = useShiftFactory(axis,shouldReverse);
        const result = factory(cells);

        expect(result).toEqual(expected);
    });
    
    it('should shift to south-west', () => {
        const cells = [
            { x: -1, y: 1, z: 0, value: 0 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: 1, y: -1, z: 0, value: 2 },
        ];
        const axis = 'z';
        const shouldReverse = true;
        const expected = [
            { x: -1, y: 1, z: 0, value: 0 },
            { x: 0, y: 0, z: 0, value: 0 },
            { x: 1, y: -1, z: 0, value: 4 },
        ];

        const factory = useShiftFactory(axis,shouldReverse);
        const result = factory(cells);

        expect(result).toEqual(expected);
    });

    it('should shift to south-east', () => {
        const cells = [
            { x: 1, y: 0, z: -1, value: 0 },
            { x: 0, y: 0, z: 0, value: 2 },
            { x: -1, y: 0, z: 1, value: 2 },
        ];
        const axis = 'y';
        const shouldReverse = true;
        const expected = [
            { x: 1, y: 0, z: -1, value: 0 },
            { x: 0, y: 0, z: 0, value: 0 },
            { x: -1, y: 0, z: 1, value: 4 },
        ];

        const factory = useShiftFactory(axis,shouldReverse);
        const result = factory(cells);

        expect(result).toEqual(expected);
    });

});