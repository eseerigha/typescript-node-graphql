import IUserDto from "./user.dto";
interface IAuthResponseDto{
  token?: string,
  user?:  IUserDto,
  error?: string
};
  
export default IAuthResponseDto;