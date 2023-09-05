import { useMutation } from "@apollo/client";
import { AUTHENTICATE_MUTATION } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
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

        // Store the access token
        await authStorage.setAccessToken(accessToken);

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
