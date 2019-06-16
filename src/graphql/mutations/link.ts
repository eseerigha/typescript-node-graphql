import {GraphQLNonNull, GraphQLString, GraphQLID} from "graphql";
import {LinkType} from "../types";
import {ILinkRepository} from "../../modules/repositories/interfaces";
import {ILinkDto} from "../../modules/dto";

const addLink = {
    type: LinkType,
    args: {
        description: {type: new GraphQLNonNull(GraphQLString)},
        url: { type: new GraphQLNonNull(GraphQLString)},
        user_id: { type: new GraphQLNonNull(GraphQLID)},
    },
    resolve: async (root: any, args: ILinkDto, {linkRepository}:{linkRepository: ILinkRepository}, info: any) => {
        
        const item = await linkRepository.create(args);
        return item;
    },
};

export {
    addLink,
};
