import IBaseQuery from "./base.query";

interface IUserQuery extends IBaseQuery{
  email?: string,
  name?: string,
  password?: string
};

export default IUserQuery;