import {GraphQLNonNull, GraphQLString} from "graphql";
import {UserType} from "../types";
import {IUserRepository} from "../../modules/repositories/interfaces";
import {IUserDto} from "../../modules/dto";

const addUser = {
    type: UserType,
    args: {
        email: {type: new GraphQLNonNull(GraphQLString)},
        firstname: { type: new GraphQLNonNull(GraphQLString)},
        lastname: { type:  new GraphQLNonNull(GraphQLString)},
    },
    resolve: async (root: any, args: IUserDto, {userRepository}:{userRepository: IUserRepository}, info: any) => {
        
        const user = await userRepository.create(args);
        return user;
    },
};

export {
    addUser,
};
