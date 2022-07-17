import { useTranslation } from "react-i18next";

export const GAME_STATUS = {
    playing: 'playing',
    gameOver: 'game-over',
};

export default function GameStatus({ status }) {
    const { t } = useTranslation();

    return (<div>
        <span>{t("gameStatus.label")}</span>
        {status && <span data-status={status}>{t(`gameStatus.status.${status}`)}</span>}
    </div>)
}