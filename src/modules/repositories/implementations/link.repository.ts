import {injectable} from "inversify";
import {ILinkEntity} from "../../entities/ILink.entity";
import BaseRepository from "./base.repository";
import {ILinkRepository} from "../interfaces/ILink.repository";
import LinkSchema from "../../schema/link.schema";
import {IBaseQuery} from "../../query";

@injectable()
class LinkRepository extends BaseRepository<ILinkEntity> implements ILinkRepository{

    constructor(){
        super(LinkSchema);
    }

    // public async findAll(query: IBaseQuery = {}): Promise<ILinkEntity[]>{
    //     return this._model.find(query).populate('postedBy').lean().exec();
    // }
}
export default LinkRepository;