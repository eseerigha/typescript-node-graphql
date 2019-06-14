import {Types} from "mongoose";
export interface IWritable<T> {
    create(): Promise<T>;
    update(id: Types.ObjectId): Promise<T>;
    delete(id: Types.ObjectId): Promise<boolean>;
}
