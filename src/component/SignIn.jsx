import React from "react";
import { useFormik } from "formik";
import useSignIn from "../hook/useSignIn";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import * as yup from "yup";
import AuthStorage from "../utils/authStorage";

const validationSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  username: yup.string().required("username is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { username, password } = values;
      try {
        const response = await signIn({ username, password });
        const { data } = response;
        if (data && data.authorize.accessToken) {
          // Authentication succeeded, access token is in data.authorize.accessToken
          console.log("Access Token:", data.authorize.accessToken);
          await AuthStorage.setAccessToken(data.authorize.accessToken);
        } else {
          console.log("Authentication failed.");
        }
      } catch (error) {
        console.error("Authentication error:", error);
      }
    },
  });

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        value={formik.values.email}
        onChangeText={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
        placeholder="Enter your email"
        style={styles.input}
      />
      {formik.touched.email && formik.errors.email && (
        <Text style={styles.error}>{formik.errors.email}</Text>
      )}

      <Text>Username</Text>
      <TextInput
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
        placeholder="username"
        // secureTextEntry
        style={styles.input}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.error}>{formik.errors.username}</Text>
      )}

      <Text>Password</Text>
      <TextInput
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        placeholder="Enter your password"
        secureTextEntry
        style={styles.input}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}

      <Text>Confirm Password</Text>
      <TextInput
        value={formik.values.confirmPassword}
        onChangeText={formik.handleChange("confirmPassword")}
        onBlur={formik.handleBlur("confirmPassword")}
        placeholder="Confirm password"
        secureTextEntry
        style={styles.input}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <Text style={styles.error}>{formik.errors.confirmPassword}</Text>
      )}

      <Button
        title="Sign In"
        onPress={formik.handleSubmit}
        disabled={formik.isSubmitting}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 5,
  },
  error: {
    color: "#d73a4a",
    fontSize: 20,
  },
});

export default SignIn;
