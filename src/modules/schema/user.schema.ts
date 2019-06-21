import {Schema,model,Model,Types} from "mongoose";
import {IUserEntity} from "../entities/IUser.entity";
const mongoosePaginate = require("mongoose-paginate");


const UserSchema: Schema = new Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: String}
});

UserSchema.plugin(mongoosePaginate);

const User: Model<IUserEntity> = model<IUserEntity>("User",UserSchema);
export default User;