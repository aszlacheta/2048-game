import { useTranslation } from "react-i18next";
import useGameStatus from "../../hooks/useGameStatus";

/**
 * Component used to represent game status in the board view
 * @param {{hasMoreMoves: Boolean}} props React properties used to:
 *          1) hasMoreMoves - determines if user has more moves, true if there are possible moves; false otherwise 
 * @returns {ReactElement}
 */
export default function GameStatus({ hasMoreMoves }) {
    const { t } = useTranslation();
    const status = useGameStatus(hasMoreMoves);

    return (<div>
        <span>{t("gameStatus.label")}</span>
        {status && <span data-status={status}>{t(`gameStatus.status.${status}`)}</span>}
    </div>)
}