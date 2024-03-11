import useGameQueryParams from "../useGameQueryParams";

describe('useGameQueryParams hook', () => {

    it('should return requested variables from url', () => {
        // mock location 
        const mockLocation = new URL("https://localhost.com:555?protocol=https&hostname=abc&port=123&radius=1");
        let location = window.location;
        mockLocation.replace = jest.fn();
        delete window.location;
        window.location = mockLocation;

        const expected = {
            protocol: 'https',
            hostname: 'abc',
            port: '123',
            radius: '1',
        };
        const result = useGameQueryParams();

        expect(result).toEqual(expected);

        // unmock location
        window.location = location;
    });

    it('should return undefined if no params provided', () => {
        // mock location 
        const mockLocation = new URL("https://localhost.com:555?");
        let location = window.location;
        mockLocation.replace = jest.fn();
        delete window.location;
        window.location = mockLocation;

        const expected = {
            protocol: undefined,
            hostname: undefined,
            port: undefined,
            radius: undefined,
        };
        const result = useGameQueryParams();

        expect(result).toEqual(expected);

        // unmock location
        window.location = location;
    });

});