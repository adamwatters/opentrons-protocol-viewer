import React from 'react';
import Container from './Container';
import { shallow } from 'enzyme';
import reducer from '../reducers'
import { createStore } from 'redux'

const store = createStore(reducer)

test('Container renders without crashing', () => {
  shallow(<Container
    store={store}
    x={0} 
    y={0} 
    type='tiprack-10ul' 
    containerLocation='A1'
    dispatch={()=>{}}
    origin=''
    destination=''
    inPlayMode={false}/>
  );
});