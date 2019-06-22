import {Request} from "express";
import {IAuthService} from "../modules/repositories/interfaces";

export const getUserId = function(context: any){

    const {authService,request}:{authService: IAuthService, request: Request} = context;
    const authorizationHeader = request.get('Authorization');
    if(authorizationHeader){
        const token = authorizationHeader.replace('Bearer ', '');
        const {id} = authService.verifyToken(token, `${process.env.PASSWORD_SECRET_KEY}`);
        return id;
    }
    throw new Error("Please provide authorization header!!");
}