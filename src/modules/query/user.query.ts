import IBaseQuery from "./base.query";
import {Types} from "mongoose";

interface IUserQuery extends IBaseQuery{
  email?: string,
  name?: string,
  password?: string
};

export default IUserQuery;