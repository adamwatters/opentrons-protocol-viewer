import React from 'react'
import containerDescriptions from '../data/containerDescriptions'
import {map} from 'lodash'

const Container = ({x, y, type, location}) => {
  const containerData = containerDescriptions[type];
  const wells = map(containerData.locations, (wellDescription, wellLocation) => {
    return (
      <g key={`${wellDescription.x}-${wellDescription.y}`} transform={`translate(${wellDescription.x}, ${wellDescription.y})`}>
        {wellDescription.diameter ? 
          <circle className='well' fill='lightgreen' r={wellDescription.diameter / 2}/> :
          <rect className='well' fill='lightgreen' width={wellDescription.width} height={wellDescription.length} />
        }
      </g>
    )
  })
  const offset = containerData['origin-offset'] || {x: 0, y: 0}
  return (
    <g className={`${type}-${location}`} transform={`translate(${x}, ${y})`}>
      <g transform={`translate(${offset.x}, ${offset.y})`}>
        {wells}
      </g>
    </g>
  )
}

export default Container;