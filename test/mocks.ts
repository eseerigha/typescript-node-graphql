import {PaginateResult} from "mongoose";

let paginatedData: any = {
    docs: [],
    totalDocs: 4,
    limit: 10,
    hasPrevPage: false,
    hasNextPage: false,
    page: 1,
    totalPages: 1,
    prevPage: null,
    nextPage: null
}; 

export const links = [
    {
        _id: 1,
        description: "Link to google",
        url: "www.google.com"
    },
    {
        _id: 2,
        description: "Link to ebay",
        url: "www.ebay.com" 
    }
]

export const linkRepository = {

    findAll: ()=> Object.assign({},paginatedData,{docs: links})
};

export const authService = {
    verifyToken: async(token: string,secretKey: string)=> Promise.resolve({id:"1234qwerty"})
};