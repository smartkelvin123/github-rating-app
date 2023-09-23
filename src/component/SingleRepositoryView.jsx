import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import * as Linking from "expo-linking";
import { fetchRepositories } from "../graphql/queries";

const SingleRepositoryView = () => {
  const { id } = useParams();

  const { data, loading } = useQuery(fetchRepositories, {
    variables: { id },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const repository = data ? data.repository : null;

  if (!repository) {
    return <Text>Repository not found</Text>;
  }

  const openGitHubRepository = () => {
    if (repository.url) {
      Linking.openURL(repository.url);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.fullName}>{repository.fullName}</Text>
        <Text>{repository.description}</Text>
        <Text>Language: {repository.language}</Text>
        <Text>Stars: {repository.stargazersCount}</Text>
        <Text>Forks: {repository.forksCount}</Text>
        <Text>Rating: {repository.ratingAverage}</Text>
        <Text>Reviews: {repository.reviewCount}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Open on GitHub" onPress={openGitHubRepository} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  fullName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 16,
  },
});

export default SingleRepositoryView;
