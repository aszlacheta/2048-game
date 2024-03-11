import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Hexagon from '../Hexagon';

describe('Hexagon component', () => {
    it('should render properly without props', () => {
        const component = renderer.create(<Hexagon />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render properly with proper values provided', () => {
        const component = renderer.create(<Hexagon x={1} y={1} z={1} value={2} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should not render value if equals 0', () => {
        const { container } = render(<Hexagon x={1} y={1} z={1} value={0} />);
        expect(container.innerText).toBeFalsy();
    });
});