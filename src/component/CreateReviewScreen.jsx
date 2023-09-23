import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CreateReviewForm from "./CreateReviewForm";

const CreateReviewScreen = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Review</Text>
      <CreateReviewForm onSubmit={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default CreateReviewScreen;
