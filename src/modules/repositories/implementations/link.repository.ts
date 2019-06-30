import {injectable} from "inversify";
import {ILinkEntity} from "../../entities/ILink.entity";
import BaseRepository from "./base.repository";
import {ILinkRepository} from "../interfaces/ILink.repository";
import LinkSchema from "../../schema/link.schema";

@injectable()
class LinkRepository extends BaseRepository<ILinkEntity> implements ILinkRepository{

    constructor(){
        super(LinkSchema);
    }
};

export default LinkRepository;