import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';

test('Container renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Container x={0} y={0} type='tiprack-10ul' location='A1'/>, div);
});