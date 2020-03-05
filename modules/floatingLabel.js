import React, {Component} from 'react';
import {View, TextInput, Animated} from 'react-native';
import {Easing} from 'react-native-reanimated';

export default class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
    this.animation = new Animated.Value(0);
  }

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  componentDidUpdate = () => {
    Animated.timing(this.animation, {
      toValue: this.state.isFocused || this.props.value !== '' ? 100 : 0,
      duration: 200,
      easing: Easing.in,
    }).start();
  };

  render = () => {
    const {label, onColor, offColor, ...props} = this.props;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this.animation.interpolate({
        inputRange: [0, 100],
        outputRange: [18, 0],
      }),
      fontSize: this.animation.interpolate({
        inputRange: [0, 100],
        outputRange: [20, 14],
      }),
      color: this.animation.interpolate({
        inputRange: [0, 100],
        outputRange: [offColor ? offColor : '#aaa', onColor ? onColor : '#000'],
      }),
    };
    return (
      <View style={{paddingTop: 18}}>
        <Animated.Text style={[labelStyle]}>{label}</Animated.Text>
        <TextInput
          {...props}
          style={props.inputStyle}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  };
}
