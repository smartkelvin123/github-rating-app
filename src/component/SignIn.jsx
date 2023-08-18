import React from "react";
import { useFormik } from "formik";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().required("Email is required"),

  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",

      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
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

      {/* <Text>Age</Text>
      <TextInput
        value={formik.values.age}
        onChangeText={formik.handleChange("age")}
        onBlur={formik.handleBlur("age")}
        placeholder="Enter your age"
        style={styles.input}
      />
      {formik.touched.age && formik.errors.age && (
        <Text style={styles.error}>{formik.errors.age}</Text>
      )} */}

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
