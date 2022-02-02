const { gql } = require('apollo-server');

module.exports = gql`
  enum RoleType {
    USER
    ADMIN
  }

  scalar DateTime


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


  type Mutation {
    register(username: String!, password: String!): LoggedUser!
    login(username: String!, password: String!): LoggedUser!

  }
`;
