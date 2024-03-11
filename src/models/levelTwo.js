const board = [
    { x: 0, y: 1, z: -1, value: 0 },
    { x: -1, y: 1, z: 0, value: 0 },
    { x: 1, y: 0, z: -1, value: 0 },
    { x: 0, y: 0, z: 0, value: 0 },
    { x: -1, y: 0, z: 1, value: 0 },
    { x: 1, y: -1, z: 0, value: 0 },
    { x: 0, y: -1, z: 1, value: 0 },
];

const level = 2;

const levelTwo = {
    board,
    level,
}

/** 
 * Represents models for level two 
 */
export default levelTwo;