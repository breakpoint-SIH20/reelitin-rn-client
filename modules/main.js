import React, {Component} from 'react';
import {Text, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DataForm from '../modules/DataForm';

const screen = createBottomTabNavigator();

const world = () => {
  return (
    <>
      <Text>World</Text>
    </>
  );
};

export default class Main extends Component {
  componentDidMount = () => {
    this.props.navigation.push('SplashScreen');
  };
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <screen.Navigator
          screenOptions={{
            gestureEnabled: true,
            cardOverlayEnabled: true,
          }}>
          <screen.Screen
            name="Upload data"
            component={DataForm}
            options={{headerShown: false}}
          />
          <screen.Screen name="Check results" component={world} />
        </screen.Navigator>
      </>
    );
  }
}
