import React from 'react';
import type {ReactNode} from 'react';
import {store} from './store';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import StackNavigation from './navigation';
import theme from './assets/theme';

const App: () => ReactNode = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <StackNavigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
