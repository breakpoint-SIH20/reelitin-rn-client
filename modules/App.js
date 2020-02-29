import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './Splashed';
import Main from './main';

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
            gestureEnabled: true,
            cardOverlayEnabled: true,
          }}>
          <screen.Screen name="MainNavigator" component={Main} />
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
