import IBaseQuery from "./base.query";

interface IUserQuery extends IBaseQuery{
  email?: string,
  firstname?: string,
  lastname?: string
};

export default IUserQuery;