import axios from "axios";

const DEFAULTS = {
    port: '80',
    backendUrl: 'localhost',
    level: 2,
    protocol: 'http',
}

/**
 * Retrieves new cells to be added to the board based on existing and non-empty ones
 * @param {Array<Object>} cells list of non-empty cells (cells that have value property higher than 0), default empty array
 * @param {string|number} level level of the game, default 2
 * @param {string} backendUrl backend url, default 'localhost'
 * @param {string|number} port port number, default '80'
 * @param {string} protocol protocol type, default 'http'
 * @returns 
 */
export function getCells(
    cells = [],
    level = DEFAULTS.level,
    backendUrl = DEFAULTS.backendUrl,
    port = DEFAULTS.port,
    protocol = DEFAULTS.protocol) {
    return axios.post(`${protocol}://${backendUrl}:${port}/${level}`, cells)
}