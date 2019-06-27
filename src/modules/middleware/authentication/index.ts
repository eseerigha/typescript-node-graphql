import {IAuthService} from "../../repositories/interfaces";
import {AuthenticationError} from "apollo-server";

export const authenticated = (next: any) => (root: any, args: any, context: any, info: any): string =>{

    const {token, authService}: {token: string, authService: IAuthService} = context;

    try{
        const {id} = authService.verifyToken(token, `${process.env.PASSWORD_SECRET_KEY}`);
        context = Object.assign({},context,{userId : id});

    }catch(err){
        throw new AuthenticationError("Invalid token");
    }
    
    return next(root, args, context, info);
};