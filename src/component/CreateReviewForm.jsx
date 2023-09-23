import React from "react";
import { View, Button, TextInput, Text } from "react-native";
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
        <View>
          {/* Input fields */}
          {/* Owner's GitHub Username */}
          <TextInput
            placeholder="Owner's GitHub Username"
            onChangeText={handleChange("ownerUsername")}
            onBlur={handleBlur("ownerUsername")}
            value={values.ownerUsername}
          />
          {errors.ownerUsername && <Text>{errors.ownerUsername}</Text>}

          {/* Repository Name */}
          <TextInput
            placeholder="Repository Name"
            onChangeText={handleChange("repositoryName")}
            onBlur={handleBlur("repositoryName")}
            value={values.repositoryName}
          />
          {errors.repositoryName && <Text>{errors.repositoryName}</Text>}

          {/* Rating */}
          <TextInput
            placeholder="Rating (0-100)"
            onChangeText={handleChange("rating")}
            onBlur={handleBlur("rating")}
            value={values.rating}
            keyboardType="numeric"
          />
          {errors.rating && <Text>{errors.rating}</Text>}

          {/* Review */}
          <TextInput
            placeholder="Review (optional)"
            onChangeText={handleChange("review")}
            onBlur={handleBlur("review")}
            value={values.review}
            multiline
          />

          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default CreateReviewForm;
