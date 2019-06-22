import IBaseQuery from "./base.query";

interface ILinkQuery extends IBaseQuery{
  description?: string,
  url?: string,
  postedBy?: string
};

export default ILinkQuery;