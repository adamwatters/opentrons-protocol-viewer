import React from 'react'

const Deck = ({children, width, height}) => {
  return (
    <svg className='deck' width='100%' viewBox={`0 0 ${width} ${height}`}>
      {children}
    </svg>
  )
}

export default Deck;