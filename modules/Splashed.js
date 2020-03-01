import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, StatusBar} from 'react-native';

export default class Splash extends Component {
  state = {change: false};

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({change: true});
    }, 2000);
  };
  componentDidUpdate() {
    if (this.state.change) this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffffff" />
        <Image
          source={require('../assets/images/medicine.png')}
          style={styles.image}
        />
        <View style={styles.innerContainer}>
          <Text style={[styles.text, {color: '#5b9ed6'}]}>reel</Text>
          <Text style={[styles.text, {color: '#f084ad'}]}>it</Text>
          <Text style={[styles.text, {color: '#ef2d57'}]}>in</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 40,
  },
  image: {
    width: 200,
    height: 200,
  },
});
