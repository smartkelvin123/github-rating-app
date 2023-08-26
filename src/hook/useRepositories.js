import { useState, useEffect } from "react";
import { fetchRepositories } from "../graphql/queries";
// import Constants from "expo-constants";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  // const apolloUri = Constants.expoConfig.extra.APOLLO_URI;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetchRepositories();
      setRepositories(data);
      setLoading(false);
    }

    fetchData();
  }, []);
  // }, [apolloUri]);

  return { repositories, loading };
};

export default useRepositories;

// import { useQuery, gql } from "@apollo/client";
// import { GET_REPOSITORIES } from "../graphql/queries";

// const useRepositories = () => {
//   const { loading, error, data } = useQuery(GET_REPOSITORIES);

//   if (loading) {
//     console.log("Loading repositories...");
//     return { loading };
//   }

//   if (error) {
//     console.error("Error fetching repositories:", error);
//     return { error };
//   }

//   console.log("Repositories data:", data);

//   return { repositories: data.repositories };
// };

// export default useRepositories;

// import { useState, useEffect } from "react";

// const useRepositories = () => {
//   const [repositories, setRepositories] = useState();
//   const [loading, setLoading] = useState(false);

//   const fetchRepositories = async () => {
//     setLoading(true);

//     const response = await fetch("http://192.168.42.228:4000/graphql", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         query: `
//           query {
//             repositories {
//               edges {
//                 node {
//                   id
//                   fullName
//                   description
//                   language
//                   forksCount
//                   stargazersCount
//                   ratingAverage
//                   reviewCount
//                   ownerAvatarUrl
//                 }
//               }
//             }
//           }
//         `,
//       }),
//     });

//     const json = await response.json();
//     setRepositories(json.data.repositories);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchRepositories();
//   }, []);

//   return { repositories, loading, refetch: fetchRepositories };
// };

// export default useRepositories;
