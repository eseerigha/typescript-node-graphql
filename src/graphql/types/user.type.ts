import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList,GraphQLNullableType} from "graphql";
import LinkType from "./link.type";

const UserType: GraphQLObjectType = new GraphQLObjectType({
    name : "User",
    fields: ()=> ({
        id: { type: GraphQLID },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString},
        links: {
            type: GraphQLList(LinkType),
            resolve: (root: any, args: any, context: any, info: any) => {
                // return PersonModel.find().exec();
                // root.id returns the id of the current user
                //console.log(args.id);
                return [];
            },
        },
    }),
});

export default UserType;