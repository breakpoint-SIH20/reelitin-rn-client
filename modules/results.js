import React, {useState} from 'react';
import {View, Text} from 'react-native';

const Results = () => {
  const [effectiveness] = useState([
    ['phenoxymethylpenicillin', 90],
    ['flucloxacillin', 90],
    ['amoxicillin', 90],
    ['cefaclor', 90],
    ['cefadroxil', 90],
    ['cefalexin', 90],
    ['tetracycline', 90],
    ['doxycycline', 90],
    ['lymecycline', 90],
    ['gentamicin', 90],
  ]);
  return (
    <View>
      {effectiveness.map((val, index) => {
        return <Text key={index}>{val[0] + ' ' + val[1]}</Text>;
      })}
    </View>
  );
};

export default Results;
