import React from 'react';
import {View, StyleSheet} from 'react-native';

import InputLabel from '../modules/InputLabel';

const DataForm = () => {
  return (
    <View style={styles.container}>
      <InputLabel label={'Disease'} />
      <InputLabel label={'Medicine'} />
      <InputLabel label={'Dosage'} />
      <InputLabel label={'Name'} />
      <InputLabel label={'Age'} />
      <InputLabel label={'Weight'} />
      <InputLabel label={'Comments'} />
      <InputLabel label={'Width'} />
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
