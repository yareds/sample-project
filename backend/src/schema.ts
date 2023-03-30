
import { gql } from 'apollo-server';


//GRAPHQL-SCHEMA
export const typeDefs = gql`

    type AdditionalInfo {
        gender: String
        company: String!
        email: String!
        phone: String!
        address: String!
    }


    type Client {
        id: ID!
        name: String!
        age: Int!
        gender: String
        additionalInfo: AdditionalInfo!
    }


    type Query {
        oneClient(id: ID!): Client!
        allClients: [Client!]!
    }

`;