import { injectable } from "inversify";
import {IUserEntity} from "../../entities/IUser.entity";
import BaseRepository from "./base.repository";
import {IUserRepository} from "../interfaces/IUser.repository";
import UserSchema from "../../schema/user.schema";

@injectable()
class UserRepository extends BaseRepository<IUserEntity> implements IUserRepository{

    constructor(){
        super(UserSchema);
    }
}

export default UserRepository;