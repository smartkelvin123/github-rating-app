import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHENTICATE_MUTATION } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const [signInMutation, result] = useMutation(AUTHENTICATE_MUTATION);

  const signIn = async ({ username, password }) => {
    try {
      const response = await signInMutation({
        variables: {
          credentials: {
            username,
            password,
          },
        },
      });

      if (response.data) {
        const { accessToken } = response.data.authenticate;
        await authStorage.setAccessToken(accessToken);

        // Reset Apollo Client's store
        await apolloClient.resetStore();

        return accessToken;
      } else {
        throw new Error("Sign-in failed.");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      throw error;
    }
  };

  return [signIn, result];
};

export default useSignIn;
