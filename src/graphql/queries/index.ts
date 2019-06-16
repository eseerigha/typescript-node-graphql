import {GraphQLObjectType,GraphQLString} from "graphql";
import {userQuery, usersQuery} from "../queries/user";

const query = new GraphQLObjectType({
    name: "Query",
    fields: {
        hello:{
            type: GraphQLString,
            resolve: async (root: any, args: any, context: any, info: any) => {
                // return PersonModel.find().exec();
                return "Hello World";
            }
        },
        users: usersQuery,
        user: userQuery,
    },
});

export default query;
