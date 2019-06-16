import {Types} from "mongoose";
import {IBaseDto} from "../../dto";

export interface IWritable<T> {
    create(model: IBaseDto): Promise<T>;
    update(id: Types.ObjectId): Promise<T>;
    delete(id: string): Promise<boolean>;
}
