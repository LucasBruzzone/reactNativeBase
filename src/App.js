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
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App = () => {
  // To disable yellow warnings.
  YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested',
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistStore(store)}>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <Routes />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
