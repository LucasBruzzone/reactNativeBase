import React from 'react';
import {
  StatusBar,
  YellowBox,
  SafeAreaView,
} from 'react-native';
import store from '../redux/store';
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
        <StatusBar barStyle="dark-content" />
        <HomeScreen />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
