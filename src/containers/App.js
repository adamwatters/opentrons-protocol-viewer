import React from 'react'
import Deck from '../components/Deck'
import Container from '../components/Container'

import deckDescription from '../data/deckDescription'
import deckConfig from '../data/deckConfig'


const App = () => {
  const containers = deckConfig.map((item, index) => {
    return (
      <Container
        x={deckDescription[item.location].x}
        y={deckDescription[item.location].y}
        type={item.container}
        location={item.location}
        key={index}
      />
    )
  })
  return (
    <div className='app'>
      <Deck width={427.5} height={383.25} >
        {containers}
      </Deck>
    </div>
  );
}

export default App;