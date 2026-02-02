
import React from 'react';
import Navigation from '@navigation/Navigation';
import {Provider}  from 'react-redux'

import  { store} from '@states/store'
const App = () => {
  return (
    // <Navigation />
     <Provider  store={store}>
      
      <Navigation />
 

      </Provider>
   
  );
};

export default App;
