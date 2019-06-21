import {IBaseEntity} from "./IBase.entity";

export interface IUserEntity extends IBaseEntity {
    email: string,
    name: string,
    password: string
}