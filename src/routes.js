import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './containers/HomeScreen/index.js';
import SecondScreen from './containers/SecondScreen/index.js';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
