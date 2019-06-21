import IBaseDto from "./base.dto";

interface IUserDto extends IBaseDto{
  email: string,
  name: string,
  password: string
};

export default IUserDto;