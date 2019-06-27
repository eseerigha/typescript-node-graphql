const Joi =  require("@hapi/joi");
 
export const PaginationQuerySchema = Joi.object().keys({
    limit: Joi.number().required(),
    page: Joi.number().required(),
    lean: Joi.boolean()
});

export const UserQuerySchema = Joi.object().keys({
    email: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required()
});