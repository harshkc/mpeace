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

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Question: {
        fields: {
          upvotedBy: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          downvotedBy: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          comments: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          answers: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          tags: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
      Answer: {
        fields: {
          upvotedBy: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          downvotedBy: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          comments: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  link: authLink.concat(httpLink),
});

export default client;
