import React from 'react';
import Deck from './Deck';
import { mount } from 'enzyme';
import deckDescription from '../data/deckDescription'

test('Deck renders arbitrary children', () => {
  const wrapperOne = mount(<Deck deckDescription={deckDescription}><span></span></Deck>);
  const wrapperTwo = mount(<Deck deckDescription={deckDescription}><span></span><span></span></Deck>);
  expect(wrapperOne.find('span').length).toEqual(1)
  expect(wrapperTwo.find('span').length).toEqual(2)
});