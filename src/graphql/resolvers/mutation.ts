import {ILinkDto, IUserDto} from "../../modules/dto";
import {ILinkRepository, IUserRepository, IAuthService} from "../../modules/repositories/interfaces";
import mapper, {SCHEMATYPES,DTOTYPES} from "../../modules/mapping";

const createLink = async function(parent: any, args: ILinkDto, {linkRepository}:{linkRepository:ILinkRepository}, info: any){
    let link = await linkRepository.create(args);
    //console.log(link);
    const newLink = mapper.map(SCHEMATYPES.LinkSchema, DTOTYPES.LinkDto,link);
    //console.log(newLink);
    return link;
};

const signup = async function(parent: any, args: IUserDto, {userRepository,authService}:{userRepository:IUserRepository,authService: IAuthService}, info: any){
    
    const password: string = authService.hashPassword(args.password);
    args = Object.assign({},args,{password});
    const user = await userRepository.create(args);
    const newUser: IUserDto = mapper.map(SCHEMATYPES.UserSchema, DTOTYPES.UserDto,user);
    const token: string = authService.generateToken(newUser,`${process.env.PASSWORD_SECRET_KEY}`);
    
    return {
        token,
        user: newUser
    };
};

const login = async function(parent: any, args: ILinkDto, {linkRepository}:{linkRepository:ILinkRepository}, info: any){
    let link = await linkRepository.create(args);
    //console.log(link);
    const newLink = mapper.map(SCHEMATYPES.LinkSchema, DTOTYPES.LinkDto,link);
    //console.log(newLink);
    return link;
};

export {
    createLink,
    signup
}