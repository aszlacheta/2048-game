import renderer from 'react-test-renderer';
import GameStatus from "../GameStatus";

describe('Game status component', () => {
    it('should render properly without props', () => {
        const component = renderer.create(<GameStatus />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('should render properly with hasMoreMoves provided', () => {
        const component = renderer.create(<GameStatus hasMoreMoves={true} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render properly with hasMoreMoves equals 0', () => {
        const component = renderer.create(<GameStatus hasMoreMoves={false} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render properly with wrong hasMoreMoves', () => {
        const component = renderer.create(<GameStatus hasMoreMoves={'a'} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});