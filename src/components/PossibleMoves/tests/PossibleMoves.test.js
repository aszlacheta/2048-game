import renderer from 'react-test-renderer';
import PossibleMoves from '../PossibleMoves';

describe('Possible moves component', () => {
    it('should render properly without props', () => {
        const component = renderer.create(<PossibleMoves />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render properly with props provided', () => {
        const component = renderer.create(<PossibleMoves number={3} maxMoves={6}/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render properly with wrong props provided', () => {
        const component = renderer.create(<PossibleMoves number={'a'} maxMoves={'b'}/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});