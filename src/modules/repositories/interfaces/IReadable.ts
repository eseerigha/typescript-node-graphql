import {Types} from "mongoose";
export interface IReadable<T> {
    findAll(): Promise<T>;
    findOneById(id: Types.ObjectId): Promise<T>;
}
