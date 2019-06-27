import {IPaginationQuery} from "../../query";
import {PaginationQuerySchema, validateModel} from "../../validators";

export const validatePaginationQueryModel = (next: any) => (root: any, args: IPaginationQuery, context: any, info: any)=>{
    
    validateModel(args,PaginationQuerySchema);

    return next(root, args, context, info);
};