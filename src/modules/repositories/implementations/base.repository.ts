import { injectable, unmanaged } from "inversify";
import {Document, PaginateResult} from "mongoose";
import {IBaseEntity} from "../../entities/IBase.entity";
import {IBaseRepository} from "../interfaces/IBase.repository";
import {Types} from "mongoose";
import {IBaseQuery, IPaginationQuery} from "../../query";
import {IBaseDto} from "../../dto";
import BaseModel from "../../schema/base.model";

@injectable()
class BaseRepository<T extends IBaseEntity> implements IBaseRepository<T> {

    protected _model: BaseModel<T>;

    constructor(@unmanaged() schemaModel: BaseModel<T>){
        this._model = schemaModel;
    }

    public async create(model: IBaseDto): Promise<T> {
        const createdEntity = new this._model(model);
        return await createdEntity.save();
    }

    public async findAll(query: IBaseQuery = {}, paginateQuery: IPaginationQuery = {}): Promise<PaginateResult<T>>{
        return await this._model.paginate(query,paginateQuery);
    }

    public async findOne(query: IBaseQuery = {}): Promise<T>{
        return this._model.findOne(query).lean().exec();
    }

    public async findOneById(id: string): Promise<T> {
        return this._model.findById(id).lean().exec();
    }

    public async update(): Promise<any> {
        return Promise.resolve({});
    }

    public async delete(id: string): Promise<boolean> {
        //return this._model.findByIdAndDelete(this.toObjectId(id)).lean().exec();
        return Promise.resolve(true);
    }

    private toObjectId(_id: string): Types.ObjectId {
        return Types.ObjectId.createFromHexString(_id);
    }
}

export default BaseRepository;