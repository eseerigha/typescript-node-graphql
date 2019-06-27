import {PaginateResult} from "mongoose";
import {ILinkRepository, IUserRepository} from "../../modules/repositories/interfaces";
import mapper, {SCHEMATYPES,DTOTYPES} from "../../modules/mapping";
import { ILinkEntity, IUserEntity } from "../../modules/entities";
import {IPaginationQuery} from "../../modules/query";
import {validatePaginationQueryModel} from "../../modules/middleware/validation";
import {authenticated} from "../../modules/middleware/authentication";

const feed = authenticated(validatePaginationQueryModel( async(parent: any, args: IPaginationQuery, context: any, info: any)=>{
    
    const {linkRepository}:{linkRepository: ILinkRepository} = context;
    const query = {};
    const paginateQuery : IPaginationQuery = {
        page: args.page || 1,
        limit: args.limit || 10,
        lean: true
    };

    let result: PaginateResult<ILinkEntity> =  await linkRepository.findAll(query,paginateQuery);
    result.docs = result.docs.map((item)=> mapper.map(SCHEMATYPES.LinkSchema, DTOTYPES.LinkDto,item));
    return result;
}));

const users = authenticated(validatePaginationQueryModel( async(parent: any, args: IPaginationQuery, context: any, info: any)=>{
    
    const {userRepository}:{userRepository: IUserRepository} = context;
    const query = {};
    const paginateQuery : IPaginationQuery = {
        page: args.page || 1,
        limit: args.limit || 10,
        lean: true
    };

    let result: PaginateResult<IUserEntity> =  await userRepository.findAll(query,paginateQuery);
    result.docs = result.docs.map((item)=> mapper.map(SCHEMATYPES.UserSchema, DTOTYPES.UserDto,item));
    return result;
}));


export {
    feed,
    users
}