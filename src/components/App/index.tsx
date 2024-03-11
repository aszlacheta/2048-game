import React from "react";
import useGameQueryParams from "../../hooks/useGameQueryParams";
import levelsConfig from "../../models/levels";
import Board from "../Board/Board";
import './App.scss';

const DEFAULT_LEVEL = 2;
const DEFAULT_LEVEL_MIN = 2;
const DEFAULT_LEVEL_MAX = 4;

/**
 * Entry point for the application
 * @returns {ReacElement} Component that will be mounted to the root element defined in index.html file.
 */
export const App: React.FC = () => {

    const {hostname, port, radius, protocol} = useGameQueryParams();

    const parsedRadius: number = parseInt(radius || '') || DEFAULT_LEVEL;
    const levelNumber: number = parsedRadius >= DEFAULT_LEVEL_MIN && parsedRadius <= DEFAULT_LEVEL_MAX ? parsedRadius : DEFAULT_LEVEL;

    const levels: { [index: number]: any } = levelsConfig;
    const defaults = (levels && levels[levelNumber]) || levels[DEFAULT_LEVEL];

    return (
        <div className="App">
            <Board hostname={hostname} port={port} levelNumber={levelNumber} protocol={protocol} defaults={defaults}/>
        </div>
    )
}
