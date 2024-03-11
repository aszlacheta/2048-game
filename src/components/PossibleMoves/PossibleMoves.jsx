import { useTranslation } from 'react-i18next';
import './PossibleMoves.scss';

/**
 * Component used to represent number of possible moves for given game
 * @param {{number: number, maxMoves: number}} props React props that represent:
 *      1) number - number of possible moves that left for given game 
 *      2) maxMoves - maximum number of moves
 * @returns {ReactElement}
 */
export default function PossibleMoves({ number, maxMoves }) {
    const { t } = useTranslation();
    const width = number > 0 ? (number / maxMoves) : 0;

    return (
        <div className="possible-moves" title={t('possibleMoves.label', { number })}>
            <div className="possible-moves-number">{number}</div>
            <div className="possible-moves-progress" style={{ "--width": width }} />
        </div>
    )
}