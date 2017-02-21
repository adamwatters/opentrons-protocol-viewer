import React from 'react';
import Deck from './Deck';
import { shallow } from 'enzyme';
import deckDescription from '../data/deckDescription'

test('Deck renders arbitrary children ', () => {
  const wrapperOne = shallow(<Deck deckDescription={deckDescription}><span></span></Deck>);
  const wrapperTwo = shallow(<Deck deckDescription={deckDescription}><span></span><span></span></Deck>);
  expect(wrapperOne.find('span')).toHaveLength(1)
  expect(wrapperTwo.find('span')).toHaveLength(2)
});