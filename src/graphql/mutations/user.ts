import {GraphQLNonNull, GraphQLString} from "graphql";
import {UserType} from "../types";

const userMutation = {
    type: UserType,
    args: {
        firstname: { type: GraphQLNonNull(GraphQLString) },
        lastname: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: (root: any, args: any, context: any, info: any) => {
        // var person = new PersonModel(args);
        // return person.save();
    },
};

export {
    userMutation,
};
