import {GraphQLObjectType} from "graphql";
import {addUser} from "./user";
import {addLink} from "./link";

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser,
        addLink,
    },
});

export default mutation;
