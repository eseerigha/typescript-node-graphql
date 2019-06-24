import {Schema,model,Model,Types} from "mongoose";
import {IUserEntity} from "../entities/IUser.entity";
import mongoosePaginate from "mongoose-paginate-v2";
import BaseModel from "./base.model";


const UserSchema: Schema = new Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: String}
});

UserSchema.plugin(mongoosePaginate);

const User: BaseModel<IUserEntity> = model<IUserEntity>("User",UserSchema) as BaseModel<IUserEntity>;
export default User;