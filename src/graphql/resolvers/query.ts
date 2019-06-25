import {PaginateResult} from "mongoose";
import {ILinkDto, IUserDto, IFeedQueryDto} from "../../modules/dto";
import {ILinkRepository, IUserRepository} from "../../modules/repositories/interfaces";
import mapper, {SCHEMATYPES,DTOTYPES} from "../../modules/mapping";
import { ILinkEntity } from "../../modules/entities/ILink.entity";

const feed = async function(parent: any, args: IFeedQueryDto, context: any, info: any){
    
    const {linkRepository}:{linkRepository: ILinkRepository} = context;
    const query = {};
    const paginateQuery:IFeedQueryDto = {
        page: args.page || 1,
        limit: args.limit || 10,
        lean: true
    };

    let result: PaginateResult<ILinkEntity> =  await linkRepository.findAll(query,paginateQuery);
    let items = result.docs.map((item)=> mapper.map(SCHEMATYPES.LinkSchema, DTOTYPES.LinkDto,item));
    return items;
};

const users = async function(parent: any, args: IUserDto, context: any, info: any){
    
    const {userRepository}:{userRepository: IUserRepository} = context;
    let items =  await userRepository.findAll();

    //items =  items.map((item)=> mapper.map(SCHEMATYPES.UserSchema, DTOTYPES.UserDto,item));
    return items;
};


export {
    feed,
    users
}