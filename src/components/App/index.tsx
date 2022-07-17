import React from "react";
import useGameQueryParams from "../../hooks/useGameQueryParams";
import levelsConfig from "../../models/levels";
import Board from "../Board/Board";
import './App.scss';

/**
 * Entry point for the application
 * @returns {ReacElement} Component that will be mounted to the root element defined in index.html file.
 */
export const App: React.FC = () => {

  const { hostname, port, radius, protocol } = useGameQueryParams();

  const DEFAULT_LEVEL = 2;
  const levelNumber : number = parseInt(radius || '') || DEFAULT_LEVEL;
  const levels : {[index: number]:any} = levelsConfig;
  const defaults = (levels && levels[levelNumber]) || levels[DEFAULT_LEVEL];
  
  return (
    <div className="App">
      <Board hostname={hostname} port={port} radius={radius} protocol={protocol} defaults={defaults}/>
    </div>
  )
}
