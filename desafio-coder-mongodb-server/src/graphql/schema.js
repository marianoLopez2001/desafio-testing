import { buildSchema } from 'graphql';

const schema = buildSchema(`
input UserInput {
    name: String,
  }
  type User {
    name: String,
    _id: ID!
  }
  type Query {
    readAll: [User],
    readById(id: String): User
  }
  type Status {
    code: Int, msg: String
  }
  type Mutation { 
	create(data: UserInput): Status,
	update(id: ID!, data: UserInput):Status,
	deleteById(id: ID!): Status
}
`); 

export default schema;
