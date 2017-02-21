import React from 'react';
import Console from './Console';
import { shallow } from 'enzyme';
import reducer from '../reducers'
import { createStore } from 'redux'

const store = createStore(reducer)

test('Console renders without crashing', () => {
  shallow(<Console
    store={store}
    origin='' 
    destination='' 
    transfers={[]}
    inPlayMode={false}
    dispatch={()=>{}}/>
  );
});