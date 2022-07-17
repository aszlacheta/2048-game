
export const GAME_STATUS = {
    playing: 'playing',
    gameOver: 'game-over',
};

/**
 * Hook used to determine game status - playing or game over
 * @param {{hasMoreMoves: boolean}} hasMoreMoves if true - user still have some moves; false otherwise
 * @returns {GAME_STATUS} status of the game, one of 'playing' or 'game-over'
 */
export default function useGameStatus(hasMoreMoves) {

    if (hasMoreMoves) {
        return GAME_STATUS.playing;
    } else {
        return GAME_STATUS.gameOver;
    }

}