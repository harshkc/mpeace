import {gql} from "@apollo/client";

export const QUESTION_DETAILS = gql`
  fragment QuestionDetails on Question {
    id
    title
    body
    tags
    points
    views
    acceptedAnswer
    upvotedBy
    downvotedBy
    createdAt
    updatedAt
  }
`;

export const LOGGED_USER_DETAILS = gql`
  fragment LoggedUserDetails on LoggedUser {
    id
    username
    role
    token
  }
`;
