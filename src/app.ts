require("dotenv").config();
import { ApolloServer } from "apollo-server";

const port = `${process.env.SERVER_PORT}` || 7000;
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


connectDb().then(()=> {

  console.log("Db connection successful");

  server.listen(port).then(({url,subscriptionsUrl}) => {
    console.log(`Server started on ${url}`);
    console.log(`Subscription started on ${subscriptionsUrl}`);
  }).catch(err=> console.log(err));

})
.catch((err)=> console.log(err));


