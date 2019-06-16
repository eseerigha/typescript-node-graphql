import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull} from "graphql";
import UserType from "./user.type";
import {IUserRepository} from "../../modules/repositories/interfaces";

const LinkType: GraphQLObjectType = new GraphQLObjectType({
    name : "Link",
    fields: ()=> ({
        id: { type: GraphQLID },
        description: { type: GraphQLString },
        url: { type: GraphQLString},
        user_id: {type: new GraphQLNonNull(GraphQLID)},
        postedBy: { 
            type: UserType,
            resolve: async (root: any, args: any, {userRepository}: {userRepository: IUserRepository}, info: any) => {

                //root corresponds to the current link type
                let user = await userRepository.findOneById(root.user_id);
                return user;
            },
        }
    }),
});

export default LinkType;