import React from "react";
import { View, Button, TextInput, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const initialValues = {
  ownerUsername: "",
  repositoryName: "",
  rating: "",
  review: "",
};

const validationSchema = yup.object().shape({
  ownerUsername: yup.string().required("Owner username is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(0, "Rating must be at least 0")
    .max(100, "Rating must be at most 100"),
  review: yup.string(),
});

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Owner's GitHub Username"
            onChangeText={handleChange("ownerUsername")}
            onBlur={handleBlur("ownerUsername")}
            value={values.ownerUsername}
          />
          {errors.ownerUsername && (
            <Text style={styles.error}>{errors.ownerUsername}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Repository Name"
            onChangeText={handleChange("repositoryName")}
            onBlur={handleBlur("repositoryName")}
            value={values.repositoryName}
          />

          {errors.repositoryName && (
            <Text style={styles.error}>{errors.repositoryName}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Rating (0-100)"
            onChangeText={handleChange("rating")}
            onBlur={handleBlur("rating")}
            value={values.rating}
            keyboardType="numeric"
          />

          {errors.rating && <Text style={styles.error}>{errors.rating}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Review (optional)"
            onChangeText={handleChange("review")}
            onBlur={handleBlur("review")}
            value={values.review}
            multiline
          />

          <Button
            title={isSubmitting ? "Submitting..." : "Submit"}
            onPress={handleSubmit}
            disabled={isSubmitting}
          />
        </View>
      )}
    </Formik>
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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CreateReviewForm;
