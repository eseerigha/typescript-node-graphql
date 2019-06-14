import { injectable, unmanaged } from "inversify";
import {Document, Model} from "mongoose";
import {IBaseEntity} from "../../entities/IBase.entity";
import {IBaseRepository} from "../interfaces/IBase.repository";
import {Types} from "mongoose";

@injectable()
class BaseRepository<T extends IBaseEntity> implements IBaseRepository<T> {

    private _model: Model<Document>;

    constructor(@unmanaged() schemaModel: Model<Document>){
        this._model = schemaModel;
    }

    public async create(): Promise<any> {
        return Promise.resolve({});
    }

    public async findAll(): Promise<any> {
        return Promise.resolve({'Hello': 'Hello'});
    }

    public async findOneById(id: Types.ObjectId ): Promise<any> {
        return Promise.resolve({});
    }

    public async update(id: Types.ObjectId): Promise<any> {
        return Promise.resolve({});
    }

    public async delete(id: Types.ObjectId): Promise<any> {
        return Promise.resolve({});
    }

    private toObjectId(_id: string): Types.ObjectId {
        return Types.ObjectId.createFromHexString(_id);
    }
}

export default BaseRepository;