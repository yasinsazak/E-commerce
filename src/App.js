import React from 'react';
import {AuthStack} from './navigators';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AuthStack />
    </Provider>
  );
};

export default App;
