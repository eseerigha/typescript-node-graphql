const Joi =  require("@hapi/joi");
import {UserQuerySchema,PaginationQuerySchema} from "./schema";
import {UserInputError} from "apollo-server";


const validateModel = (model: any, schema: any)=>{
    const {error} = Joi.validate(model,schema);
    if(error) throw new UserInputError("Failed to get events due to validation errors",error);
};

export {
    validateModel,
    UserQuerySchema,
    PaginationQuerySchema
}