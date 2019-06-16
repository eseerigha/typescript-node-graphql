import IBaseDto from "./base.dto";

interface ILinkDto extends IBaseDto{
  description: string,
  url: string,
  user_id: string
};

export default ILinkDto;