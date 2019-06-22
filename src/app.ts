require("dotenv").config();
import { Server } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import express,{Request} from "express";
import ExpressGraphQL from "express-graphql";
import { execute, subscribe } from 'graphql';

const app = express();
const port = `${process.env.SERVER_PORT}`;
import schema from "./graphql";
import connectDb from "./modules/database";
import * as repositories from "./ioc/root";


app.use("/api/graphql", ExpressGraphQL((request: Request) =>{

  return {
    schema,
    graphiql: true,
    context: {
      ...repositories,
      request
    }
  }

}));

// Making plain HTTP server for Websocket usage
const server = new Server(app);

/** GraphQL Websocket definition **/
SubscriptionServer.create({
  schema,
  execute,
  subscribe,
}, {
  server: server,
  path: '/api/ws',
},);

connectDb().then( async()=> {
  console.log("Db connection successful");
  server.listen(port, () => {
    console.log(`Server started on port ${port}`);
  }).on("error",(err)=> console.log(err));

})
.catch((err)=> console.log(err));


