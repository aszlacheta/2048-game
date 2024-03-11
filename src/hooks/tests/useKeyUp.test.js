import React from 'react';
import useKeyUp from '../useKeyUp';
import { cleanup, render } from '@testing-library/react';

describe('useKeyUp', () => {

    let addEventListenerSpy,
        removeEventListenerSpy;
    const ComponentFactory = (targetedKey = "a", callback = () => { }) => () => {
        useKeyUp(targetedKey, callback);

        return <div className="mocked-component" />
    };

    beforeEach(() => {
        addEventListenerSpy = jest.spyOn(window, 'addEventListener');
        removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should trigger callback on key up', () => {
        const targetedKey = 'w';
        const callback = jest.fn();
        const Component = ComponentFactory(targetedKey, callback);
        const event = new KeyboardEvent('keyup', { 'key': 'w' });
        render(<Component />);

        window.dispatchEvent(event);

        expect(callback).toHaveBeenCalled();
    });

    it('should add key up handlers when component is created and remove when it is deleted', () => {
        const Component = ComponentFactory();
        render(<Component />);

        expect(addEventListenerSpy).toHaveBeenCalled();
        cleanup();
        expect(removeEventListenerSpy).toHaveBeenCalled();
    })
})