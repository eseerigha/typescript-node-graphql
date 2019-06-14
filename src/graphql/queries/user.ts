import {GraphQLList, GraphQLString} from "graphql";
import {UserType} from "../types";

const usersQuery = {
    type: GraphQLList(UserType),
    resolve: (root: any, args: any, context: any, info: any) => {
        // return PersonModel.find().exec();
        return [];
    },
};

const userQuery = {
    type: UserType,
    args: {
        id: { type: GraphQLString },
    },
    resolve: (root: any, args: any, context: any, info: any) => {
        // return PersonModel.find().exec();
        //console.log(args.id);
        return {};
    },
};

export {
    usersQuery,
    userQuery,
};
