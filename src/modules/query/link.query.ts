import IBaseQuery from "./base.query";
import {Types} from "mongoose";

interface ILinkQuery extends IBaseQuery{
  description?: string,
  url?: string,
  postedBy?: string
};

export default ILinkQuery;