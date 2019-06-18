import {ILinkDto} from "../../modules/dto";
import {ILinkRepository} from "../../modules/repositories/interfaces";

const createLink = async function(parent: any, args: ILinkDto, {linkRepository}:{linkRepository:ILinkRepository}, info: any){
    let link = await linkRepository.create(args);
    return link;
};

export {
    createLink
}