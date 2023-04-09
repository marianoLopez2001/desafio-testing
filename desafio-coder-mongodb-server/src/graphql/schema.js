import { buildSchema } from 'graphql';

const schema = buildSchema(`
input UserInput {
    name: String,
  }
  type User {
    name: String,
  }
  type Query {
    readAll: [User],
    readById(id: String): User
  }
  type Mutation { 
	create(UserInput: UserInput): User,
	update(id: ID!, datos: UserInput):User,
	deleteById(id: ID!): User
}
`); //_id o id?

export default schema;

//    readById(id: ID!): User,


//user
//    _id: ID!