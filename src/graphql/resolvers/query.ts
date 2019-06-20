import {ILinkDto} from "../../modules/dto";
import {ILinkRepository} from "../../modules/repositories/interfaces";

const feed = async function(parent: any, args: ILinkDto, {linkRepository}:{linkRepository:ILinkRepository}, info: any){
    const links =  await linkRepository.findAll();
    console.log(links);
    return links;
};


export {
    feed
}