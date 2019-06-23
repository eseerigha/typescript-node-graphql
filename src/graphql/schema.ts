import {gql} from "apollo-server-express";

const typeDef = gql`

   type User {
     id: ID!
     name: String!
     email: String!
     links: [Link!]!
   }
   
   type Link {
     id: ID!
     description: String!
     url: String!
     postedBy: User
   }

   type Vote {
      id: ID!
      link: Link!
      user: User!
   }

   type AuthPayload {
      token: String
      user: User
      error: String
   }

   type LinkMutationPayload {
      mutation: MutationType
      node: Link
   }

   enum MutationType {
      CREATED
      UPDATED
      DELETED
   }

   type Query {
      info: String!
      feed: [Link!]!
      users: [User!]!
   }

   type Mutation {
      createLink(url: String!, description: String!, postedBy: String!): Link!
      signup(email: String!, password: String!, name: String!): AuthPayload!
      login(email: String!, password: String!): AuthPayload!
   }

   type Subscription{
      linkMutated: LinkMutationPayload
   }
`;

export default typeDef;