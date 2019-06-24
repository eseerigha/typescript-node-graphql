import {injectable} from "inversify";
import {ILinkEntity} from "../../entities/ILink.entity";
import BaseRepository from "./base.repository";
import {ILinkRepository} from "../interfaces/ILink.repository";
import LinkSchema from "../../schema/link.schema";
import {IBaseQuery,ILinkQuery} from "../../query";

@injectable()
class LinkRepository extends BaseRepository<ILinkEntity> implements ILinkRepository{

    constructor(){
        super(LinkSchema);
    }

    public async findAll(rootQuery?: ILinkQuery): Promise<ILinkEntity[]>{
        let query = (rootQuery) ? rootQuery.query : {};
        return this._model.find(query).lean().exec();
    }
}
export default LinkRepository;