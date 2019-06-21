import {connect} from "mongoose";
const connectDb = ()=>{
    return connect(`${process.env.DATABASE_URL}`,{useNewUrlParser: true, useCreateIndex: true});
};

export default connectDb;