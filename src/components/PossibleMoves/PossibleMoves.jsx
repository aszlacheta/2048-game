import { useTranslation } from "react-i18next";

/**
 * Component used to represent number of possible moves for given game
 * @param {{number: number}} props React props that represent:
 *      1) number - number of possible moves that left for given game 
 * @returns {ReactElement}
 */
export default function PossibleMoves({ number }) {
    const { t } = useTranslation();

    return (
        <div>{t('possibleMoves.label', { number })}</div>
    )
}