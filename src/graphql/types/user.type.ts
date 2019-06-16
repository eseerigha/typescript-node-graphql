import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList} from "graphql";
import LinkType from "./link.type";
import {ILinkRepository} from "../../modules/repositories/interfaces";
import {ILinkQuery} from "../../modules/query";

const UserType: GraphQLObjectType = new GraphQLObjectType({
    name : "User",
    fields: ()=> ({
        id: { type: GraphQLID },
        email: {type: GraphQLString },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString},
        links: {
            type: GraphQLList(LinkType),
            resolve: async(root: any, args: any, {linkRepository}:{linkRepository: ILinkRepository}, info: any) => {
                
                let query: ILinkQuery = {
                    user_id: root.id  
                };

                // root.id returns the id of the current user
                let links = await linkRepository.findAll(query);
                return links;
            },
        },
    }),
});

export default UserType;