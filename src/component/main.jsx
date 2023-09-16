import Constants from "expo-constants";
import { StyleSheet, View, Pressable } from "react-native";
import React from "react";
import RepositoryList from "../RepositoryList";
import Text from "../Text";

import { Route, Routes, Link, useNavigate } from "react-router-native";
import SignIn from "./SignIn";

const Main = () => {
  const navigate = useNavigate();

  const handleRepoAppPress = () => {
    navigate("/");
  };

  return (
    <View style={styles.container}>
      {/* <AppBar /> */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleRepoAppPress}>
          <Text style={styles.buttonText}>Repository Application</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Link to="/signin">
            <Text style={styles.buttonText}>Sign In</Text>
          </Link>
        </Pressable>
      </View>
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
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

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
