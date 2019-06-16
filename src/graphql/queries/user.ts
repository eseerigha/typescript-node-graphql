import {GraphQLList, GraphQLString} from "graphql";
import {UserType} from "../types";
import {IUserRepository} from "../../modules/repositories/interfaces";

const usersQuery = {
    type: GraphQLList(UserType),
    resolve: async(root: any, args: any, {userRepository}:{userRepository: IUserRepository}, info: any) => {
        let users = await userRepository.findAll();
        return users;
    },
};

const userQuery = {
    type: UserType,
    args: {
        id: { type: GraphQLString },
    },
    resolve: async(root: any, args:any, {userRepository}:{userRepository: IUserRepository}, info: any) => {
        let user = await userRepository.findOneById(args.id);
        return user;
    },
};

export {
    usersQuery,
    userQuery,
};
