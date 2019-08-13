var {
  buildSchema
} = require('graphql');

var schema = buildSchema(`
    type Query {
        users: [User!]!
        user(id: ID!): User
      }
      
    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: ID!, input: UserInput): User
        deleteUser(id: ID!): DeleteUser
    }

    input UserInput {
        first_name: String,
        last_name: String
    }

    type DeleteUser {
      id: ID!
    }

    type User {
      id: ID!
      first_name: String
      last_name: String
    }
`);

module.exports = schema;