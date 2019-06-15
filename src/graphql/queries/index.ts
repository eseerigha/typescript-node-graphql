import {GraphQLObjectType,GraphQLString} from "graphql";
import {userQuery, usersQuery} from "../queries/user";
import {ILinkRepository} from "../../modules/repositories/interfaces";

const query = new GraphQLObjectType({
    name: "Query",
    fields: {
        hello:{
            type: GraphQLString,
            resolve: async (root: any, args: any, {linkRepository}:{linkRepository:ILinkRepository}, info: any) => {
                // return PersonModel.find().exec();
                let result = await linkRepository.findAll();
                return "Hello World";
            }
        },
        users: usersQuery,
        user: userQuery,
    },
});

export default query;
