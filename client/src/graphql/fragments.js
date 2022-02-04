import {gql} from "@apollo/client";

export const AUTHOR_DETAILS = gql`
  fragment AuthorDetails on Author {
    id
    username
  }
`;

export const ANSWER_DETAILS = gql`
  fragment AnswerDetails on Answer {
    id
    author {
      ...AuthorDetails
    }
    body
    comments {
      ...CommentDetails
    }
    points
    upvotedBy
    downvotedBy
    createdAt
    updatedAt
  }
  ${AUTHOR_DETAILS}
`;

export const QUESTION_DETAILS = gql`
  fragment QuestionDetails on Question {
    id
    author {
      ...AuthorDetails
    }
    title
    body
    tags
    points
    views
    acceptedAnswer
    answers {
      ...AnswerDetails
    }
    upvotedBy
    downvotedBy
    createdAt
    updatedAt
  }
  ${AUTHOR_DETAILS}
  ${ANSWER_DETAILS}
`;

export const LOGGED_USER_DETAILS = gql`
  fragment LoggedUserDetails on LoggedUser {
    id
    username
    role
    token
  }
`;
