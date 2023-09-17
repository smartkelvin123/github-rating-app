import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import RepositoryItem from "../RepositoryItem";
// import { REPOSITORY } from '../graphql/queries';
import { fetchRepositories } from "../graphql/queries";

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(fetchRepositories, {
    variables: { id },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    console.error("Error fetching repository data:", error);
    return <Text>Error loading data</Text>;
  }

  const repository = data.repository;

  const openInGitHub = () => {
    Linking.openURL(repository.url);
  };

  return (
    <View style={styles.container}>
      <RepositoryItem repository={repository} />{" "}
      {/* Reuse RepositoryItem if needed */}
      <Button title="Open in GitHub" onPress={openInGitHub} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default SingleRepositoryView;
