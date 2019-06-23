require("dotenv").config();
import { ApolloServer } from "apollo-server";
import express from "express";

const app = express();
const port = `${process.env.SERVER_PORT}`;
import {typeDefs,resolvers} from "./graphql";
import connectDb from "./modules/database";
import * as repositories from "./ioc/root";


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
      return {
        ...repositories,
        req
      };
    },
});

// Making plain HTTP server for Websocket usage
connectDb().then(()=> {
  console.log("Db connection successful");

  server.listen(port).then(({url,subscriptionsUrl}) => {
    console.log(`Server started on ${url}`);
    console.log(`Subscription started on ${subscriptionsUrl}`);
  }).catch(err=> console.log(err));

})
.catch((err)=> console.log(err));


