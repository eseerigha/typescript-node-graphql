import * as queries from "./query";
import * as mutations from "./mutation";
import * as links from "./link";

const resolvers = {
    Query: queries,
    Mutation: mutations,
    Link: links
};

export default resolvers;