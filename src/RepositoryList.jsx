import React from "react";
import { FlatList, View, StyleSheet, Text, Image } from "react-native";

const repositories = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
  },
  {
    id: "rails.rails",
    fullName: "rails/rails",
    description: "Ruby on Rails",
    language: "Ruby",
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
  },
  {
    id: "django.django",
    fullName: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    language: "Python",
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
  },
  {
    id: "reduxjs.redux",
    fullName: "reduxjs/redux",
    description: "Predictable state container for JavaScript apps",
    language: "TypeScript",
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
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
      // other props
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
