//import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList,GraphQLNullableType} from "graphql";
import UserType from "./user.type";
import LinkType from "./link.type";
import VoteType from "./vote.type";


// let UserType: any = null;
// let LinkType: any = null;
// let VoteType: any = null;

// UserType = new GraphQLObjectType({
//     name : "User",
//     fields: ()=> ({
//         id: { type: GraphQLID },
//         firstname: { type: GraphQLString },
//         lastname: { type: GraphQLString},
//         links: {
//             type: GraphQLList(LinkType),
//             resolve: (root: any, args: any, context: any, info: any) => {
//                 // return PersonModel.find().exec();
//                 // root.id returns the id of the current user
//                 //console.log(args.id);
//                 return [];
//             },
//         },
//     }),
// });

// LinkType = new GraphQLObjectType({
//     name : "Link",
//     fields: ()=> ({
//         id: { type: GraphQLID },
//         description: { type: GraphQLString },
//         url: { type: GraphQLString},
//         postedBy: { 
//             type: UserType,
//             resolve: (root: any, args: any, context: any, info: any) => {
//                 // return PersonModel.find().exec();
//                 // root.id returns the id of the current user
//                 //console.log(args.id);
//                 return {};
//             },
//         },
//         votes: {
//             type: GraphQLList(VoteType),
//             resolve: (root: any, args: any, context: any, info: any) => {
//                 // return PersonModel.find().exec();
//                 // root.id returns the id of the current user
//                 //console.log(args.id);
//                 return [];
//             },
//         },
//     }),
// });

// VoteType = new GraphQLObjectType({
//     name : "Vote",
//     fields: ()=> ({
//         id: { type: GraphQLID },
//         link: { 
//             type: LinkType,
//             resolve: (root: any, args: any, context: any, info: any) => {
//                 // return PersonModel.find().exec();
//                 // root.id returns the id of the current user
//                 //console.log(args.id);
//                 return {};
//             },
//         },
//         user: { 
//             type: UserType,
//             resolve: (root: any, args: any, context: any, info: any) => {
//                 // return PersonModel.find().exec();
//                 // root.id returns the id of the current user
//                 //console.log(args.id);
//                 return {};
//             },
//         },
//     }),
// });

export {
    UserType,
    LinkType,
    VoteType,
};
