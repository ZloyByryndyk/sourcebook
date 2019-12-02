import React from "react";
import {View, Text, Image, TextInput, ScrollView} from "react-native";
import styles from "./styles";
import terms from "../../data/terms";
import {TouchableOpacity} from "react-native-gesture-handler";
import {back} from "../../images/back.png";

const Definition = props => {
  const difinition = props.navigation.getParam("definition");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{terms[difinition]}</Text>
    </View>
  );
};

Definition.navigationOptions = ({navigation}) => {
  return {
    header: () => {
      //чтобы вернуться назад на картинку < нужно повесить onPress = () => {navigation.goBack()} а картинку нужно обернуть в toichebleOpacity
      return (
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={back} style={styles.headerImageBack} />
          </TouchableOpacity>
          <Text style={styles.headerText}>
            {navigation.getParam("definition")}
          </Text>
          <View style={styles.headerImageBack} />
        </View>
      );
    },
  };
};

export default Definition;
