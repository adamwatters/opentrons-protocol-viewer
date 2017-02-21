import React from 'react'
import Deck from '../components/Deck'
import Container from '../components/Container'
import Console from '../components/Console'
import deckDescription from '../data/deckDescription'
import deckConfig from '../data/deckConfig'

const App = () => {
  return (
    <div className='app'>
      <Deck deckDescription={deckDescription} >
        {buildContainers()}
      </Deck>
      <Console />
    </div>
  );
}

function buildContainers() {
  return deckConfig.map((item, index) => {
    return (
      <Container
        x={deckDescription.locations[item.location].x}
        y={deckDescription.locations[item.location].y}
        type={item.container}
        containerLocation={item.location}
        key={index}
      />
    )
  });
}

export default App;