import Constants from "expo-constants";
import { StyleSheet, View, Pressable } from "react-native";
import React from "react";
import RepositoryList from "../RepositoryList";
import Text from "../Text";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from "react-router-native";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Pressable>
        <Text style={styles.text}>Rate Repository Application</Text>
      </Pressable>
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    backgroundColor: "blue",
  },
});
