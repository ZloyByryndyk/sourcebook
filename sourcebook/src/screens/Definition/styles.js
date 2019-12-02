import {StyleSheet} from "react-native";
export default StyleSheet.create({
  container: {flex: 1},
  text: {fontSize: 22, paddingVertical: 8, paddingHorizontal: 20},
  headerText: {
    fontSize: 22,
    textAlign: "center",
  },
  headerImageBack: {
    width: 30,
    height: 30,
  },

  header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
});
