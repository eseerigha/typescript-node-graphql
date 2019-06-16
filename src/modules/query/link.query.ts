import IBaseQuery from "./base.query";

interface ILinkQuery extends IBaseQuery{
  description?: string,
  url?: string,
  user_id?: string
};

export default ILinkQuery;