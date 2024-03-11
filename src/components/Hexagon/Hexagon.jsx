import './Hexagon.scss'

/**
 * Component used to represent hexagon on the board
 * @param {{x: number, y: number, z: number, value: number}} props React props used to:
 *      1) x defines value on x axis,
 *      2) y defines value on y axis,
 *      3) z defines value on z axis,
 *      4) value defines current value of the hexagon
 * @returns {ReactElement}
 */
export default function Hexagon({ x, y, z, value }) {

    return (
        <div className="hexagon"
            data-x={x}
            data-y={y}
            data-z={z}
            data-value={value}>
            {value || ''}
        </div>
    )
}