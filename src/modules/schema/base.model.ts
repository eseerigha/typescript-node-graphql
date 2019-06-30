import {PaginateModel} from "mongoose";
import {IBaseEntity} from "../entities/IBase.entity";
interface BaseModel<T extends IBaseEntity> extends PaginateModel<T> {}
export default BaseModel;