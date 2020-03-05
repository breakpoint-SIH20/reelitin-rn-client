import React, {Component} from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native';

import InputLabel from '../modules/InputLabel';

class DataForm extends Component {
  state = {
    disease: '',
    medicine: '',
    dosage: '',
    age: '',
    weight: '',
    name: '',
    comments: '',
  };
  render() {
    const onChange = (attr, val) => {
      this.setState({[attr]: val});
    };

    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={{height: 30}} />
          <InputLabel
            attr="disease"
            label={'Disease'}
            value={this.state.disease}
            onChange={onChange}
          />
          <InputLabel
            attr="medicine"
            label={'Medicine'}
            value={this.state.medicine}
            onChange={onChange}
          />
          <InputLabel
            attr="dosage"
            label={'Dosage'}
            value={this.state.dosage}
            onChange={onChange}
          />
          <InputLabel
            attr="name"
            label={'Name'}
            value={this.state.name}
            onChange={onChange}
          />
          <InputLabel
            attr="age"
            label={'Age'}
            value={this.state.age}
            onChange={onChange}
          />
          <InputLabel
            attr="weight"
            label={'Weight'}
            value={this.state.weight}
            onChange={onChange}
          />
          <InputLabel
            attr="comments"
            label={'Comments'}
            value={this.state.comments}
            onChange={onChange}
          />
          <Button
            title="Upload"
            onPress={() => {
              console.log(this.state);
            }}
          />
          <View style={{height: 30}} />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default DataForm;
