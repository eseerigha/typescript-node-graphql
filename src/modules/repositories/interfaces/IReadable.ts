import {Types, PaginateResult,Document} from "mongoose";
import {IBaseQuery,IPaginationQuery} from "../../query";

export interface IReadable<T> {
    findAll(query?: IBaseQuery, paginatinateQuery?:IPaginationQuery): Promise<PaginateResult<T>>;
    findOneById(id: string): Promise<T>;
    findOne(query?: IBaseQuery): Promise<T>;
}
