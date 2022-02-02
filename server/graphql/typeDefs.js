const { gql } = require('apollo-server');

module.exports = gql`
  enum RoleType {
    USER
    ADMIN
  }

  enum VoteType {
    UPVOTE
    DOWNVOTE
  }

  scalar DateTime

  type QuestionRep {
    quesId: ID!
    rep: Int!
  }

  type AnswerRep {
    ansId: ID!
    rep: Int!
  }

  type RecentActivity {
    id: ID!
    title: String!
    points: Int!
    createdAt: DateTime!
  }

  type LoggedUser {
    id: ID!
    username: String!
    token: String!
    role: RoleType!
  }

  type User {
    id: ID!
    username: String!
    role: RoleType!
    questions: [QuestionRep]!
    answers: [AnswerRep]!
    createdAt: DateTime!
    reputation: Int!
    recentQuestions: [RecentActivity]!
    recentAnswers: [RecentActivity]!
    totalQuestions: Int!
    totalAnswers: Int!
  }

  type UserList {
    id: ID!
    username: String!
    createdAt: DateTime!
  }

  type Author {
    id: ID!
    username: String!
  }

  type Comment {
    id: ID!
    author: Author!
    body: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Answer {
    id: ID!
    author: Author!
    body: String!
    comments: [Comment]!
    points: Int!
    upvotedBy: [ID]!
    downvotedBy: [ID]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type QuestionList {
    id: ID!
    author: Author!
    title: String!
    body: String!
    tags: [String!]!
    points: Int!
    views: Int!
    answers: [Answer]!
    answerCount: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Question {
    id: ID!
    author: Author!
    title: String!
    body: String!
    tags: [String!]!
    points: Int!
    views: Int!
    acceptedAnswer: ID
    comments: [Comment]!
    answers: [Answer]!
    upvotedBy: [ID]!
    downvotedBy: [ID]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type NextPrevPage {
    page: Int!
    limit: Int!
  }


  type Query {
    getQuestions(
      sortBy: SortByType!
      page: Int!
      limit: Int!
      filterByTag: String
      filterBySearch: String
    ): PaginatedQuesList!
    viewQuestion(quesId: ID!): Question
    getUser(username: String!): User!
    getAllUsers: [UserList]!
    getAllTags: [Tag]!
  }

  type Mutation {
    register(username: String!, password: String!): LoggedUser!
    login(username: String!, password: String!): LoggedUser!

    postQuestion(title: String!, body: String!, tags: [String!]!): Question!
    deleteQuestion(quesId: ID!): ID!
    editQuestion(
      quesId: ID!
      title: String!
      body: String!
      tags: [String!]!
    ): Question!
    voteQuestion(quesId: ID!, voteType: VoteType!): Question!

    postAnswer(quesId: ID!, body: String!): [Answer!]!
    deleteAnswer(quesId: ID!, ansId: ID!): ID!
    editAnswer(quesId: ID!, ansId: ID!, body: String!): [Answer!]!
    voteAnswer(quesId: ID!, ansId: ID!, voteType: VoteType!): Answer!
    acceptAnswer(quesId: ID!, ansId: ID!): Question!
  }
`;
