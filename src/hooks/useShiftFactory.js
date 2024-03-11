import * as R from 'ramda';

/**
 * Hooks used to be a factory for shifting methods in the game.
 * Shifting can be executed to the following directions:
 * 1) north
 * 2) north-west
 * 3) north-east
 * 4) south
 * 5) south-west
 * 6) south-east
 * @param {string} axis Represents one of the possible axis - x, y, z - depending on which given move is performed 
 * @param {boolean} shouldReverse Flag that determines if the data should be reversed before doing a shift; 
 *              that helps reusing already written code
 * @returns {Function} function that executes real shift on provided data
 */
export default function useShiftFactory(axis, shouldReverse = false) {

    const reverseArraysInObjects = (array) => {
        Object.keys(array).forEach(axis => {
            array[axis].reverse();
        });
        return array;
    }
    const filterZero = (array) => array.filter(cell => cell?.value !== 0);
    const shift = (groupedBy) => {
        Object.keys(groupedBy).forEach(axis => {
            let rowByAxis = groupedBy[axis];

            // filter zeros
            rowByAxis = filterZero(rowByAxis);

            // merge
            rowByAxis.forEach((cell, index) => {
                if (index + 1 < rowByAxis.length && cell.value === rowByAxis[index + 1].value) {
                    rowByAxis[index].value = 2 * cell.value;
                    rowByAxis[index + 1].value = 0;
                }
            });

            // filter zeros again
            rowByAxis = filterZero(rowByAxis);

            // update values
            groupedBy[axis].forEach((cell, index) => {
                groupedBy[axis][index].value = rowByAxis[index]?.value || 0;
            })
        })

        return groupedBy;
    }

    return (cells) => {
        const groupByAxis = R.groupBy(cell => cell[axis]);
        const groupedByAxis = groupByAxis(cells);

        if (shouldReverse) {
            reverseArraysInObjects(groupedByAxis);
        }
        shift(groupedByAxis);
        if (shouldReverse) {
            reverseArraysInObjects(groupedByAxis);
        }

        return Object.values(groupedByAxis).flat();
    }
}