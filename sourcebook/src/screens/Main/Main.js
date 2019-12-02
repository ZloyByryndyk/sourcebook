import React from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import menuImage from '../../images/hamburgerBotton.png';
import styles from './styles';
import ListTermElement from '../../components/ListTermElement';
import terms from '../../data/terms';
import {routes} from '../../navigation';

const Menu = props => {
  const navigateToDefinition = definition => {
    props.navigation.navigate(routes.main.Definition, {definition});
  };
  return (
    <ScrollView style={styles.scrollView}>
      {Object.keys(terms).map(term => (
        <ListTermElement navigateToDefinition={navigateToDefinition} key={term}>
          {term}
        </ListTermElement>
      ))}
    </ScrollView>
  );
};

Menu.navigationOptions = {
  header: () => {
    return (
      <View style={styles.header}>
        <Image source={menuImage} style={styles.headerImage} />
        <TextInput placeholder="Введите слово" style={styles.textInputHeader} />
        <View style={styles.headerImage} />
      </View>
    );
  },
};

export default Menu;
