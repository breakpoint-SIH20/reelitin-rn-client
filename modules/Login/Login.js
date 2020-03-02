import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Animated, Button} from 'react-native';

export default class Login extends Component {
  animatedValue = new Animated.Value(0);
  componentDidMount() {
    this.props.navigation.push('SplashScreen');
  }

  User = () => {
    console.log('Pressed');
    this.props.navigation.navigate('User');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={[styles.logo]}
            source={require('../../assets/images/medicine.png')}
          />
          <View style={styles.innerContainer}>
            <Text style={[styles.title, {color: '#5b9ed6'}]}>Log</Text>
            <Text style={[styles.title, {color: '#f084ad'}]}>in</Text>
          </View>
        </View>
        <Button style={styles.btn} onPress={this.User} title="Outline button" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginTop: 20,
    flexGrow: 1,
  },
  logo: {
    width: 150,
    height: 150,
    transform: [{rotate: '15deg'}],
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 40,
    color: '#000',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  btn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
