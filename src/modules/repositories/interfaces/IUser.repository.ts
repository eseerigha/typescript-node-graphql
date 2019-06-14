import {IBaseRepository} from "./IBase.repository";
import {IUserEntity} from "../../entities/IUser.entity";

export interface IUserRepository extends IBaseRepository<IUserEntity> {
    
} 