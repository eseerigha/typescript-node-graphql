import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList,GraphQLNullableType} from "graphql";
import UserType from "./user.type";
import LinkType from "./link.type";

const VoteType = new GraphQLObjectType({
    name : "Vote",
    fields: ()=> ({
        id: { type: GraphQLID },
        link: { 
            type: LinkType,
            resolve: (root: any, args: any, context: any, info: any) => {
                // return PersonModel.find().exec();
                // root.id returns the id of the current user
                //console.log(args.id);
                return {};
            },
        },
        user: { 
            type: UserType,
            resolve: (root: any, args: any, context: any, info: any) => {
                // return PersonModel.find().exec();
                // root.id returns the id of the current user
                //console.log(args.id);
                return {};
            },
        },
    }),
});

export default VoteType;