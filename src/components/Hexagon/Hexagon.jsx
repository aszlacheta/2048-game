import './Hexagon.scss'

export default function Hexagon({ x, y, z, value }) {

    return (
        <div className="hexagon"
            data-x={x}
            data-y={y}
            data-z={z}
            data-value={value}>
            {value}

            <span>x:{x} </span>
            <span>y:{y} </span>
            <span>z:{z} </span>
        </div>
    )
}