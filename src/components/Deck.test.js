import React from 'react';
import Deck from './Deck';
import { mount } from 'enzyme';

test('Deck renders arbitrary children', () => {
  const wrapperOne = mount(<Deck><span></span></Deck>);
  const wrapperTwo = mount(<Deck><span></span><span></span></Deck>);
  expect(wrapperOne.find('span').length).toEqual(1)
  expect(wrapperTwo.find('span').length).toEqual(2)
});