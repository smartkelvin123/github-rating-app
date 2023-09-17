import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fullName}>{repository.fullName}</Text>
      <Text style={styles.description}>{repository.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  fullName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});

export default RepositoryItem;
