import {makeExecutableSchema} from "apollo-server";
const { transpileSchema } = require('graphql-s2s').graphqls2s
import resolvers from "./resolvers";
import typeDefs from "./schema";


const schema = makeExecutableSchema({
    typeDefs: [transpileSchema(typeDefs)],
    resolvers,
});

export default schema;
