import {IBaseEntity} from "./IBase.entity";
import {ILinkEntity} from "./ILink.entity";

export interface IUserEntity extends IBaseEntity {
    email: string,
    firstname: string,
    lastname: string,
    //link: ILinkEntity['_id']
}