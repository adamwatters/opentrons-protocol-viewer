import React from 'react'
import {map} from 'lodash'

const Deck = ({children, deckDescription}) => {
  const locationMarkers = map(deckDescription.locations, (location, name) => {
    return (
      <g key={name} transform={`translate(${location.x}, ${location.y})`}>
        <rect width="1" height="6" fill="grey" />
        <rect width="6" height="1" fill="grey" />
        <text x="2" y="9" fill="grey" fontSize="8">{name}</text>
      </g>
    )
  })
  return (
    <svg className='deck' viewBox={`0 0 ${deckDescription.width} ${deckDescription.height}`}>
      <g>{locationMarkers}</g>
      <g>{children}</g>
    </svg>
  )
}

export default Deck;