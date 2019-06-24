import IBaseQuery from "./base.query";
import {Types} from "mongoose";

interface IUserQuery extends IBaseQuery{
  query: {
    _id?: Types.ObjectId,
    email?: string,
    name?: string,
    password?: string
  } 
};

export default IUserQuery;