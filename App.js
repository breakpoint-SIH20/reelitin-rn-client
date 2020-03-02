import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Splash from './modules/Splash Screen/Splashed';
import Login from './modules/Login/Login';
import User from './modules/User/User';

const screen = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <screen.Navigator
          screenOptions={{
            cardStyleInterpolator:
              CardStyleInterpolators.forScaleFromCenterAndroid,
          }}>
          <screen.Screen
            name="MainNavigator"
            component={Login}
            options={{headerShown: false}}
          />
          <screen.Screen
            name="SplashScreen"
            component={Splash}
            options={{headerShown: false}}
          />
          <screen.Screen
            name="User"
            component={User}
            options={{headerShown: false}}
          />
        </screen.Navigator>
      </NavigationContainer>
    );
  }
}
