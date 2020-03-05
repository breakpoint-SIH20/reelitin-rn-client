import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Splash from '../modules/Splashed';
import Main from '../modules/main';

// const stackNavigator = createStackNavigator(
//   {
//     SplashScreen: {screen: Splash},
//     MainNavigator: {screen: Main},
//   },
//   {
//     headerMode: 'screen',
//     navigationOptions: {
//       header: {visible: false},
//     },
//   },
// );

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
            component={Main}
            options={{headerShown: false}}
          />
          <screen.Screen
            name="SplashScreen"
            component={Splash}
            options={{headerShown: false}}
          />
        </screen.Navigator>
      </NavigationContainer>
    );
  }
}
