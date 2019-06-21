require("dotenv").config();

import express from "express";
import ExpressGraphQL from "express-graphql";
const app = express();
import connectDb from "./modules/database";
import * as repositories from "./ioc/root";
const port = `${process.env.SERVER_PORT}`;
import schema from "./graphql";


app.use("/graphql", ExpressGraphQL({
  schema,
  graphiql: true,
  context: {
    ...repositories
  }
}));

connectDb().then( async()=> {
  console.log("Db connection successful");
  app.listen(port, (err) => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
  });

})
.catch((err)=> console.log(err));



// mongodb://<dbuser>:<dbpassword>@ds157571.mlab.com:57571/db_name
