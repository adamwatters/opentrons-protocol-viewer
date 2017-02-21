import React from 'react';
import Well from './Well';
import { shallow } from 'enzyme';

const roundWellDescription = {
  x: 10,
  y: 10,
  diameter: 10
}

const rectangularWellDescription = {
  x: 10,
  y: 10,
  width: 10,
  length: 10
}

const onClick = () => {}

test('Well accepts round or rectangular descriptions', () => {
  const wrapperRound = shallow(
    <Well wellDescription={roundWellDescription} onClick={onClick} id='123' isOrigin={false} isDestination={false}/>
  );
  const wrapperRectangular = shallow(
    <Well wellDescription={rectangularWellDescription} onClick={onClick} id='123' isOrigin={false} isDestination={false}/>
  );
  expect(wrapperRound.find('circle')).toHaveLength(1)
  expect(wrapperRound.find('rect')).toHaveLength(0)
  expect(wrapperRectangular.find('circle')).toHaveLength(0)
  expect(wrapperRectangular.find('rect')).toHaveLength(1)
});