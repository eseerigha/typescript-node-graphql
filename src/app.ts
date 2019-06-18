require("dotenv").config();
import {readFileSync} from "fs";
import {join} from "path";
import {makeExecutableSchema} from "graphql-tools";
import express from "express";
import ExpressGraphQL from "express-graphql";

import resolvers from "./graphql/resolvers";
const schemaFile  = join(__dirname,"/graphql/schema.graphql");
const typeDefs = readFileSync(schemaFile, 'utf8');
const app = express();
const port = `${process.env.SERVER_PORT}`;
const schema = makeExecutableSchema({typeDefs,resolvers});
import * as repositories from "./ioc/root";

app.use("/graphql", ExpressGraphQL({
  schema,
  graphiql: true,
  context: {
    ...repositories
  }
}));

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

// mongodb://<dbuser>:<dbpassword>@ds157571.mlab.com:57571/db_name
