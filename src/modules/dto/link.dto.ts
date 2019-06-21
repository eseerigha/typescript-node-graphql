import IBaseDto from "./base.dto";
import IUserDto from "./user.dto";

interface ILinkDto extends IBaseDto{
  description: string,
  url: string,
  postedBy: IUserDto
};

export default ILinkDto;