import {IBaseEntity} from "./IBase.entity";
import {IUserEntity} from "./IUser.entity"

export interface ILinkEntity extends IBaseEntity {
    description: string,
    url: string,
    postedBy: IUserEntity
}