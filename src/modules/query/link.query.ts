import IBaseQuery from "./base.query";
import {Types} from "mongoose";

interface ILinkQuery extends IBaseQuery{
  query: {
    _id?: Types.ObjectId,
    description?: string,
    url?: string,
    postedBy?: string
  } 
};

export default ILinkQuery;