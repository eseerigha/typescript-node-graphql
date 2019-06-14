import {IBaseEntity} from "./IBase.entity";

export interface ILinkEntity extends IBaseEntity {
    description: string,
    url: string
}