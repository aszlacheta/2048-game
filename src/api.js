import axios from "axios";

const BACKEND_URL = 'http://localhost:13337'

export function getCells(cells = []) {
    return axios.post(`${BACKEND_URL}/2`, cells)
}