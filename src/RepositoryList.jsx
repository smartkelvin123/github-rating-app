import React from "react";
import { FlatList, View, StyleSheet, Text, Image } from "react-native";
import useRepositories from "./hook/useRepositories";

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  const ItemSeparator = () => <View style={styles.separator} />;

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
    color: "green",
    fontWeight: "bold",
    fontSize: 14,
  },
});
