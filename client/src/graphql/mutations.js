import { gql } from '@apollo/client';
import {
  QUESTION_DETAILS,
  LOGGED_USER_DETAILS,
  COMMENT_DETAILS,
  ANSWER_DETAILS,
} from './fragments';

export const REGISTER_USER = gql`
  mutation registerUser($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      ...LoggedUserDetails
    }
  }
  ${LOGGED_USER_DETAILS}
`;

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ...LoggedUserDetails
    }
  }
  ${LOGGED_USER_DETAILS}
`;
