import {Types} from "mongoose";
import {IBaseQuery} from "../../query";

export interface IReadable<T> {
    findAll(query?: IBaseQuery): Promise<T[]>;
    findOneById(id: string): Promise<T>;
    findOne(query?: IBaseQuery): Promise<T>;
}
