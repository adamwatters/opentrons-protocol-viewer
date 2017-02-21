import React from 'react';
import App from './App';
import Deck from './Deck';
import Console from './Console';
import { shallow } from 'enzyme';

test('App renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Deck)).toHaveLength(1);
  expect(wrapper.find(Console)).toHaveLength(1);
});
