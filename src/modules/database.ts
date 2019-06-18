import {connect} from "mongoose";
const connectDb = ()=>{
    return connect(`${process.env.DATABASE_URL}`,{useNewUrlParser: true});
};

export default connectDb;