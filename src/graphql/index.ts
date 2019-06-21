import {readFileSync} from "fs";
import {join} from "path";
import {makeExecutableSchema} from "graphql-tools";
import resolvers from "./resolvers";

const schemaFile  = join(__dirname,"/schema.graphql");
const typeDefs = readFileSync(schemaFile, 'utf8');
const schema = makeExecutableSchema({typeDefs,resolvers});

export default schema;