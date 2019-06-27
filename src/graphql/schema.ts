//import {gql} from "apollo-server";

const typeDef =`

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

   type PaginateResult<T> {
      docs: [T!]!
      totalDocs: Int
      limit: Int
      hasPrevPage: Boolean
      hasNextPage: Boolean
      page: Int
      totalPages: Int
      prevPage: Int
      nextPage: Int
   }

   type Query {
      feed(page: Int, limit: Int): PaginateResult<Link>!
      users(page: Int, limit: Int): PaginateResult<User>!
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