import IBaseDto from "./base.dto";

interface IUserDto extends IBaseDto{
  email: string,
  firstname: string,
  lastname: string
};

export default IUserDto;