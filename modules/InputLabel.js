import React from 'react';
import {View, StyleSheet} from 'react-native';
import FloatingTextLabelInput from '../modules/floatingLabel';

const InputLabel = props => {
  return (
    <View style={styles.container}>
      <FloatingTextLabelInput
        value={props.value}
        textInputStyle={styles.input}
        label={props.label}
        inputStyle={styles.input}
        onColor="#011"
        offColor="#abb"
        onChange={val => {
          if (props.onChange && props.attr)
            props.onChange(props.attr, val.nativeEvent.text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 20,
    width: 300, //200
    height: 38,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InputLabel;
