import {Schema,model,Model, Types, PaginateModel} from "mongoose";
import {ILinkEntity} from "../entities/ILink.entity";
import mongoosePaginate from "mongoose-paginate-v2";
import BaseModel from "./base.model";

const LinkSchema: Schema = new Schema({
    description: {type: String, required: true},
    url: {type: String, required: true, unique: true},
    postedBy: {type: Types.ObjectId, ref: "User",required: true}
});

LinkSchema.plugin(mongoosePaginate);

const Link: BaseModel<ILinkEntity> = model<ILinkEntity>("Link",LinkSchema) as BaseModel<ILinkEntity>;
export default Link;