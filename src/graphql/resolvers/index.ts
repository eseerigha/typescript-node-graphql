import * as queries from "./query";
import * as mutations from "./mutation";
import * as links from "./link";
import * as subscriptions from "./subscription";

const resolvers = {
    Query: queries,
    Mutation: mutations,
    Link: links,
    Subscription: subscriptions
};

export default resolvers;