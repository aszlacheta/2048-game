/**
 * Hook used to verify if game has reached maximum value 
 * @param {} cells 
 * @param {*} maxValue 
 * @returns {boolean} true if game was won
 */
export default function useIsWinner(cells, maxValue) {
    return !!cells.find(cell => cell.value >= maxValue);
}