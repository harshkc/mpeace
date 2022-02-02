import { gql } from '@apollo/client';
import { AUTHOR_DETAILS, COMMENT_DETAILS, ANSWER_DETAILS } from './fragments';


export const GET_USER = gql`
  query fetchUser($username: String!) {
    getUser(username: $username) {
      id
      username
      role
      createdAt
      reputation
      totalQuestions
      totalAnswers
      recentQuestions {
        id
        title
        points
        createdAt
      }
      recentAnswers {
        id
        title
        points
        createdAt
      }
    }
  }
`;
