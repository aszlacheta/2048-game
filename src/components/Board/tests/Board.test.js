import renderer from 'react-test-renderer';
import Board from '../Board';

jest.mock("../../GameStatus/GameStatus");
jest.mock("../../PossibleMoves/PossibleMoves");
jest.mock("../../Hexagon/Hexagon");

describe('Board component', () => {

    const defaultsEmpty = {
        board: [],
        level: 2,
    }

    const defaults = {
        board: [
            { x: 0, y: 1, z: -1, value: 0 },
            { x: -1, y: 1, z: 0, value: 0 },
            { x: 1, y: 0, z: -1, value: 0 },
        ],
        level: 2,
    }

    it('should render properly empty board', () => {
        const component = renderer.create(<Board defaults={defaultsEmpty} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render properly non-empty board', () => {
        const component = renderer.create(<Board defaults={defaults} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    
});