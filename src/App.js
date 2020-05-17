import React from 'react';
import {
  StatusBar,
  YellowBox,
  SafeAreaView,
} from 'react-native';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';

import HomeScreen from './containers/HomeScreen.js/index';

const App = () => {
  // To disable yellow warnings.
  YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested',
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistStore(store)}>
          <StatusBar barStyle="dark-content" />
          <HomeScreen />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
