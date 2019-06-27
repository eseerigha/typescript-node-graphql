import {Request} from "express";

export const getAccessTokenFromRequestHeaders = (request:Request): string | null =>{
    let authorizationHeader = request.get('Authorization')
    if(authorizationHeader){
       return authorizationHeader.replace('Bearer ', '');
    }
    return null;
};