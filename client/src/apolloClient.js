import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "apollo-link-context";
import storage from "./utils/localStorage";

const url = process.env.REACT_APP_API_URL;
console.log(url);
const httpLink = new HttpLink({
  uri: url,
});

const authLink = setContext(() => {
  const loggedUser = storage.loadUser();

  return {
    headers: {
      authorization: loggedUser ? loggedUser.token : null,
    },
  };
});

