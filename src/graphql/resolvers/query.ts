import {ILinkDto} from "../../modules/dto";
import {ILinkRepository} from "../../modules/repositories/interfaces";
import mapper, {SCHEMATYPES,DTOTYPES} from "../../modules/mapping";

const feed = async function(parent: any, args: ILinkDto, {linkRepository}:{linkRepository:ILinkRepository}, info: any){
    const links =  await linkRepository.findAll();
    //console.log(links);

    let newLinks =  links.map((link)=> mapper.map(SCHEMATYPES.LinkSchema, DTOTYPES.LinkDto,link));
    //console.log(newLinks);
    return newLinks;
};


export {
    feed
}