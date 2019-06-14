import {GraphQLObjectType} from "graphql";
import {userQuery, usersQuery} from "../queries/user";

const query = new GraphQLObjectType({
    name: "Query",
    fields: {
        users: usersQuery,
        user: userQuery,
    },
});

export default query;
