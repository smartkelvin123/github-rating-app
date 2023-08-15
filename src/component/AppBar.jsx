import { View, StyleSheet, Pressable, Text } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    height: 100,
    backgroundColor: "#24292e",
    width: "100%",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    backgroundColor: "gray",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.text}>Hi kelvin</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
