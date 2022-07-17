import axios from "axios";

const DEFAULTS = {
    port: '80',
    backendUrl: 'localhost',
    level: 2,
    protocol: 'http',
}

export function getCells(
    cells = [],
    level = DEFAULTS.level,
    backendUrl = DEFAULTS.backendUrl,
    port = DEFAULTS.port,
    protocol = DEFAULTS.protocol) {
        debugger
    return axios.post(`${protocol}://${backendUrl}:${port}/${level}`, cells)
}