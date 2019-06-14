import {GraphQLObjectType} from "graphql";
import {userMutation} from "../mutations/user";

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        user: userMutation,
    },
});

export default mutation;
