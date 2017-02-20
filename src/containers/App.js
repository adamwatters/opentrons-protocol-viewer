import React from 'react'
import Deck from '../components/Deck'
import Container from '../components/Container'
import deckDescription from '../data/deckDescription'
import deckConfig from '../data/deckConfig'

const App = () => {
  const containers = deckConfig.map((item, index) => {
    return (
      <Container
        x={deckDescription.locations[item.location].x}
        y={deckDescription.locations[item.location].y}
        type={item.container}
        location={item.location}
        key={index}
      />
    )
  })
  return (
    <div className='app'>
      <Deck deckDescription={deckDescription} >
        {containers}
      </Deck>
      <div className='console'>Console</div>
    </div>
  );
}

export default App;