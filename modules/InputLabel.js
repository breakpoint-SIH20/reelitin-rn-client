import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const InputLabel = props => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={props.label} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 20,
    width: 200,
    height: 38,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InputLabel;
