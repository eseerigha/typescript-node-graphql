import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList} from "graphql";
import UserType from "./user.type";
import VoteType from "./vote.type";

const LinkType: GraphQLObjectType = new GraphQLObjectType({
    name : "Link",
    fields: ()=> ({
        id: { type: GraphQLID },
        description: { type: GraphQLString },
        url: { type: GraphQLString},
        postedBy: { 
            type: UserType,
            resolve: (root: any, args: any, context: any, info: any) => {
                // return PersonModel.find().exec();
                // root.id returns the id of the current user
                //console.log(args.id);
                return {};
            },
        },
        votes: {
            type: GraphQLList(VoteType),
            resolve: (root: any, args: any, context: any, info: any) => {
                // return PersonModel.find().exec();
                // root.id returns the id of the current user
                //console.log(args.id);
                return [];
            },
        },
    }),
});

export default LinkType;