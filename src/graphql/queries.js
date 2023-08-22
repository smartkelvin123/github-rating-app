// export const fetchRepositories = async () => {
//   const response = await fetch("http://192.168.42.228:4000/graphql", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query: `
//         query {
//           repositories {
//             edges {
//               node {
//                 id
//                 fullName
//                 description
//                 language
//                 forksCount
//                 stargazersCount
//                 ratingAverage
//                 reviewCount
//                 ownerAvatarUrl
//               }
//             }
//           }
//         }
//       `,
//     }),
//   });

//   const json = await response.json();
//   return json.data.repositories;
// };

import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
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
`;
