import {GraphQLObjectType,GraphQLString} from "graphql";
import {userQuery, usersQuery} from "../queries/user";

const query = new GraphQLObjectType({
    name: "Query",
    fields: {
        hello:{
            type: GraphQLString,
            resolve: async (root: any, args: any, {linkRepository}, info: any) => {
                // return PersonModel.find().exec();
                let result = await linkRepository.findAll();
                console.log(result);
                return "Hello World";
            }
        },
        users: usersQuery,
        user: userQuery,
    },
});

export default query;
