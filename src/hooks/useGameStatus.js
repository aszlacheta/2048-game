
export const GAME_STATUS = {
    playing: 'playing',
    gameOver: 'game-over',
    win: 'win',
};

/**
 * Hook used to determine game status - playing or game over
 * @param {{hasMoreMoves: boolean, isWinner: boolean}} props hasMoreMoves if true - user still have some moves; false otherwise
 * @returns {GAME_STATUS} status of the game, one of 'playing' or 'game-over'
 */
export default function useGameStatus(hasMoreMoves, isWinner) {

    if (isWinner) {
        return GAME_STATUS.win;
    } else if (hasMoreMoves === true) {
        return GAME_STATUS.playing;
    } else {
        return GAME_STATUS.gameOver;
    }

}