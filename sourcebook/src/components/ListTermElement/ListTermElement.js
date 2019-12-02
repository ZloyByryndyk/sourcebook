import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const ListTermElement = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigateToDefinition(props.children);
      }}
      style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default ListTermElement;
