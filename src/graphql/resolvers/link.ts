import {ILinkDto} from "../../modules/dto";
import {ILinkRepository} from "../../modules/repositories/interfaces";

const id = async function(parent: any, args: ILinkDto, {linkRepository}:{linkRepository:ILinkRepository}, info: any){
    console.log("parent");
    console.log(parent);
    return parent._id;
};


export {
    id
}