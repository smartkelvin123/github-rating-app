// const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const fetchRepositories = async () => {
  const response = await fetch("http://192.168.182.228:4000/graphql", {
    // const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          repositories {
            edges {
              node {
                id
                fullName
                description
                language
                forksCount
                stargazersCount
                ratingAverage
                reviewCount
                ownerAvatarUrl
              }
            }
          }
        }
      `,
    }),
  });

  const json = await response.json();
  return json.data.repositories;
};

// cannot not fetch
// import { gql } from "@apollo/client";

// export const GET_REPOSITORIES = gql`
//   query {
//     repositories {
//       edges {
//         node {
//           id
//           fullName
//           description
//           language
//           forksCount
//           stargazersCount
//           ratingAverage
//           reviewCount
//           ownerAvatarUrl
//         }
//       }
//     }
//   }
// `;
