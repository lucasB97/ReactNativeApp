import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';

import Clima from './pages/Clima';

const AppStack = createStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" initialRouteName="Home">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Clima" component={Clima} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;