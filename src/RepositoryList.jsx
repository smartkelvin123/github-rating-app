import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  Button,
} from "react-native";
import { useNavigate } from "react-router-native";
import useRepositories from "./hook/useRepositories";

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const navigate = useNavigate();

  const repositoryNodes =
    repositories && Array.isArray(repositories.edges)
      ? repositories.edges.map((edge) => edge.node)
      : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  const handleRepositoryPress = (id) => {
    navigate(`/repository/${id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <View style={styles.repositoryContainer}>
          <View>
            <Image
              source={{ uri: item.ownerAvatarUrl }}
              style={styles.avatar}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.repositoryTitle}>{item.id} </Text>
              <Text style={styles.repositoryTitle}> - {item.fullName}</Text>
            </View>
            <Text>{item.description}</Text>
            <View style={styles.repositoryDescription}>
              <Text style={styles.language}> {item.language}</Text>
              <View style={styles.rating}>
                <Text>Forks: {item.forksCount}</Text>
                <Text>Stars: {item.stargazersCount}</Text>
                <Text>Ratings: {item.ratingAverage}</Text>
                <Text>Reviews: {item.reviewCount}</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Open in GitHub"
                onPress={() => handleRepositoryPress(item.id)}
              />
            </View>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  repositoryContainer: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 30,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  repositoryTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  repositoryDescription: {
    color: "gray",
  },
  language: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#007bff",
    color: "white",
    marginRight: 10,
    borderRadius: 4,
    width: 100,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
