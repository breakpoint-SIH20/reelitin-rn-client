import React from 'react';
import {View, StyleSheet} from 'react-native';

import InputLabel from '../modules/InputLabel';

const DataForm = () => {
  return (
    <View style={styles.container}>
      <InputLabel label={'Disease'} />
      <InputLabel label={'Name'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DataForm;
