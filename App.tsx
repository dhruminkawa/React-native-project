
import React from 'react';
import Navigation from '@navigation/Navigation';
import {Provider}  from 'react-redux'
// import { PersistGate} from  'redux-persist/integration/react'
// import  {persistor, store} from '@states/store'
const App = () => {
  return (
    <Navigation />
    //  <Provider  store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //   <Navigation />
    //   </PersistGate>

    //   </Provider>
   
  );
};

export default App;
