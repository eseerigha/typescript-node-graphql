import {ILinkDto, IUserDto, IAuthResponseDto} from "../../modules/dto";
import {ILinkRepository, IUserRepository, IAuthService} from "../../modules/repositories/interfaces";
import mapper, {SCHEMATYPES,DTOTYPES} from "../../modules/mapping";
import {IUserQuery} from "../../modules/query";
import {getUserId} from "../../utils/auth";
import {MUTATION_EVENTS, MUTATION_EVENT_TYPES} from "../events";
import pubsub from "../pubsub";

const createLink = async function(parent: any, args: IUserDto, context: any, info: any){

    const {linkRepository}:{linkRepository: ILinkRepository} = context;
    //const userId = getUserId(context);
    //args.postedBy = userId;
    let link = await linkRepository.create(args);
    const newLink: ILinkDto = mapper.map(SCHEMATYPES.LinkSchema, DTOTYPES.LinkDto,link);

    await pubsub.publish(
        MUTATION_EVENT_TYPES.LINK_MUTATED,
        {
            linkMutated:{
                mutation: MUTATION_EVENTS.CREATED,
                node: newLink
            }
        }
    );
    return newLink;
};

const signup = async function(parent: any, args: IUserDto, context: any, info: any){
    
    const {userRepository,authService}:{userRepository: IUserRepository, authService: IAuthService} = context;
    const password: string = authService.hashPassword(args.password);
    args = Object.assign({},args,{password});
    const user = await userRepository.create(args);
    const newUser: IUserDto = mapper.map(SCHEMATYPES.UserSchema, DTOTYPES.UserDto,user);
    const token: string = authService.generateToken(newUser,`${process.env.PASSWORD_SECRET_KEY}`);
    
    let authResponse: IAuthResponseDto = {token,user: newUser};
    return authResponse;
};

const login = async function(parent: any, args: IUserDto, context: any, info: any){
    let authErrorMessage = "Invalid username or password";
    let authResponse: IAuthResponseDto = {};
    const {userRepository,authService}:{userRepository: IUserRepository, authService: IAuthService} = context;
    
    let query: IUserQuery = {email: args.email};
    
    const user = await userRepository.findOne(query);
    
    if(user){

        const isValidPassword = authService.verifyPassword(args.password,user.password);
        if(isValidPassword){
            const newUser: IUserDto = mapper.map(SCHEMATYPES.UserSchema, DTOTYPES.UserDto,user);
            const token: string = authService.generateToken(newUser,`${process.env.PASSWORD_SECRET_KEY}`);

            authResponse.token = token;
            authResponse.user = newUser;

            return authResponse;
        }
    }

    authResponse.error = authErrorMessage;
    return authResponse;
};

export {
    createLink,
    signup,
    login
}