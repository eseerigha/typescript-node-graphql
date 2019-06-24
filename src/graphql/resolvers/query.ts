import {ILinkDto, IUserDto} from "../../modules/dto";
import {ILinkRepository, IUserRepository} from "../../modules/repositories/interfaces";
import mapper, {SCHEMATYPES,DTOTYPES} from "../../modules/mapping";

const feed = async function(parent: any, args: ILinkDto, context: any, info: any){
    
    const {linkRepository}:{linkRepository: ILinkRepository} = context;
    let items =  await linkRepository.findAll();

    items = items.map((item)=> mapper.map(SCHEMATYPES.LinkSchema, DTOTYPES.LinkDto,item));
    return items;
};

const users = async function(parent: any, args: IUserDto, context: any, info: any){
    
    const {userRepository}:{userRepository: IUserRepository} = context;
    let items =  await userRepository.findAll();

    items =  items.map((item)=> mapper.map(SCHEMATYPES.UserSchema, DTOTYPES.UserDto,item));
    return items;
};


export {
    feed,
    users
}