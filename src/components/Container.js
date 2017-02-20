import React from 'react'
import containerDescriptions from '../data/containerDescriptions'
import {map} from 'lodash'

const Container = ({x, y, type, location}) => {
  const containerData = containerDescriptions[type];
  const color = getRandomColor();
  const wells = map(containerData.locations, (wellDescription, wellLocation) => {
    return (
      <g key={`${wellDescription.x}-${wellDescription.y}`} transform={`translate(${wellDescription.x}, ${wellDescription.y})`}>
        {wellDescription.diameter ? 
          <circle className='well' fill={color} r={wellDescription.diameter / 2}/> :
          <rect className='well' fill={color} width={wellDescription.width} height={wellDescription.length} />
        }
      </g>
    )
  })
  const offset = containerData['origin-offset'] || {x: 0, y: 0}
  return (
    <g className={`${name}-${location}`} transform={`translate(${x}, ${y})`}>
      <g transform={`translate(${offset.x}, ${offset.y})`}>
        {wells}
      </g>
    </g>
  )
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default Container;