import {gql} from "@apollo/client";

export const GET_QUESTIONS = gql`
  query fetchQuestions(
    $sortBy: SortByType!
    $page: Int!
    $limit: Int!
    $filterByTag: String
    $filterBySearch: String
  ) {
    getQuestions(
      sortBy: $sortBy
      page: $page
      limit: $limit
      filterByTag: $filterByTag
      filterBySearch: $filterBySearch
    ) {
      next {
        page
      }
      previous {
        page
      }
      questions {
        id
        title
        body
        tags
        points
        views
        createdAt
        updatedAt
        answerCount
      }
    }
  }
`;

export const VIEW_QUESTION = gql`
  query fetchQuestion($quesId: ID!) {
    viewQuestion(quesId: $quesId) {
      id
      title
      body
      tags
      points
      views
      createdAt
      updatedAt
      acceptedAnswer
      upvotedBy
      downvotedBy
    }
  }
`;
