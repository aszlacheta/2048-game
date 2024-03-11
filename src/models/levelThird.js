const board = [
    { x: 0, y: 2, z: -2, value: 0 },
    { x: -1, y: 2, z: -1, value: 0 },
    { x: 1, y: 1, z: -2, value: 0 },
    { x: -2, y: 2, z: 0, value: 0 },
    { x: 0, y: 1, z: -1, value: 0 },
    { x: 2, y: 0, z: -2, value: 0 },
    { x: -1, y: 1, z: 0, value: 0 },
    { x: 1, y: 0, z: -1, value: 0 },
    { x: -2, y: 1, z: 1, value: 0 },
    { x: 0, y: 0, z: 0, value: 0 },
    { x: 2, y: -1, z: -1, value: 0 },
    { x: -1, y: 0, z: 1, value: 0 },
    { x: 1, y: -1, z: 0, value: 0 },
    { x: -2, y: 0, z: 2, value: 0 },
    { x: 0, y: -1, z: 1, value: 0 },
    { x: 2, y: -2, z: 0, value: 0 },
    { x: -1, y: -1, z: 2, value: 0 },
    { x: 1, y: 2, z: 1, value: 0 },
    { x: 0, y: -2, z: 2, value: 0 },
];

const level = 3;

const levelThird = {
    board,
    level,
}

/** 
 * Represents models for third level 
 */
export default levelThird;