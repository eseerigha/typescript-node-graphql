import {ILinkDto} from "../../modules/dto";
import {IUserRepository} from "../../modules/repositories/interfaces";
import mapper, {SCHEMATYPES,DTOTYPES} from "../../modules/mapping";

const postedBy = async function(parent: any, args: ILinkDto, context: any, info: any){

    const {userRepository}:{userRepository: IUserRepository} = context;
    let user =  await userRepository.findOneById(parent.postedBy);
    user = mapper.map(SCHEMATYPES.UserSchema, DTOTYPES.UserDto,user);
    return user;
};


export {
    postedBy
}