import { useMutation } from "@apollo/client";
import { AUTHENTICATE_MUTATION } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE_MUTATION);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };

    try {
      const { data } = await mutate({ variables: { credentials } });
      return data;
    } catch (error) {
      throw error;
    }
  };

  return [signIn, result];
};

export default useSignIn;
