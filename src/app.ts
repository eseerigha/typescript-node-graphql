require("dotenv").config();
import express from "express";
import ExpressGraphQL from "express-graphql";
import schema from "./graphql/schema";
import * as repositories from "./ioc/root";
const app = express();
const port = `${process.env.SERVER_PORT}`;

// The root provides a resolver function for each API endpoint
let root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use("/graphql", ExpressGraphQL({
  schema,
  graphiql: true,
  rootValue: root,
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
