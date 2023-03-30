import { typeDefs } from '../schema';
import { resolvers } from '../resolvers';
import { makeExecutableSchema } from "graphql-tools";
const { graphql } = require('graphql');


const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

describe("getUser", () => {
  test("returns a user with the given ID", async () => {
    const data = {
        getUser: {
          id: '59761c23b30d971669fb42ff',
          name: 'Dunlap Hubbard',
          age: 36
        }
      };
  
      const query = `
        query GetUser($id: ID!) {
          getUser(id: $id) {
            id
            name
            age
          }
        }
      `;
  
      const variables = {
        id: '59761c23b30d971669fb42ff'
      };
  
      const result = await graphql(schema, query, null, null, variables, null, data);
  
      expect(result.data.getUser).toEqual(data.getUser);
    });
  });
