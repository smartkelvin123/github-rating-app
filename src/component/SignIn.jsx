import Text from "../Text";

import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";
// import { TextInput } from "react-native-paper";
import FormikTextInput from "./FormikTextInput";

const SignIn = () => {
  const onSubmit = (values) => {
    console.log("Form values:", values);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <>
            <FormikTextInput
              style={styles.input}
              name="username"
              placeholder="Username"
            />
            <FormikTextInput
              style={styles.input}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Pressable onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
