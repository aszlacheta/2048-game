/**
 * Custom hook to safely react on key up event.
 * Will be deleted once the view it is attached to, is removed from DOM.
 * @param {String} targetedKey 
 * @param {Function} callback 
 * @returns 
 */
export default function useKeyUp(targetedKey, callback) {

    const EVENT_LISTENER_KEY = 'keyup';

    const upHandler = ({ key }) => {
        if (key === targetedKey) {
            callback();
        }
    };

    return () => {
        window.addEventListener(EVENT_LISTENER_KEY, upHandler);
        return () => {
            window.removeEventListener(EVENT_LISTENER_KEY, upHandler);
        };
    }
}