import Constants from "expo-constants";
import { Text, StyleSheet, View, Pressable } from "react-native";
import React from "react";
import RepositoryList from "../RepositoryList";

const Main = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.text}>Rate Repository Application</Text>
      </Pressable>
      <View>
        <RepositoryList />
      </View>
    </View>
  );
};

export default Main;
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    backgroundColor: "blue",
  },
});
