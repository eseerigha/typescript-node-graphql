import {Schema,model,Model, Types} from "mongoose";
import {ILinkEntity} from "../entities/ILink.entity";
const mongoosePaginate = require("mongoose-paginate");

const LinkSchema: Schema = new Schema({
    description: {type: String, required: true},
    url: {type: String, required: true, unique: true},
    // user_id: {type: Types.ObjectId, ref: "User",required: true}
});

LinkSchema.plugin(mongoosePaginate);

const Link: Model<ILinkEntity> = model<ILinkEntity>("Link",LinkSchema);
export default Link;