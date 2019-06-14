import {Schema,model,Model,Types} from "mongoose";
import {IUserEntity} from "../entities/IUser.entity";
const mongoosePaginate = require("mongoose-paginate");


const UserSchema: Schema = new Schema({
    email: {type: String, required: true, unique: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    link: {type: Types.ObjectId, required: true}
});

UserSchema.plugin(mongoosePaginate);

const User: Model<IUserEntity> = model<IUserEntity>("User",UserSchema);
export default User;