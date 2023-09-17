export const fetchRepositories = async (apolloUri) => {
  try {
    const response = await fetch("http://192.168.227.228:4000/graphql", {
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
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const json = await response.json();
    return json.data.repositories;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
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
