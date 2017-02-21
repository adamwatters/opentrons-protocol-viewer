import React from 'react'
import colors from '../constants/colors'

const Well = ({wellDescription, onClick, id, isOrigin, isDestination}) => {
  const color = (isOrigin || isDestination) ? isOrigin ? colors.ORIGIN : colors.DESTINATION : colors.BASE
  return (
      <g  key={`${wellDescription.x}-${wellDescription.y}`}
          transform={`translate(${wellDescription.x}, ${wellDescription.y})`}
          onClick={() => {onClick(id)}}>
        {wellDescription.diameter ? 
          <circle className='well' fill={color} r={wellDescription.diameter / 2}/> :
          <rect className='well' fill={color} width={wellDescription.width} height={wellDescription.length} />
        }
      </g>
  )
}

export default Well;