import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme'; 
import App from './App';





describe('First Testing', () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => (container = shallow(<App />)));

  
})

