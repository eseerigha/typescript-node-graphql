import {IAuthService} from "../../repositories/interfaces";
import {AuthenticationError} from "apollo-server";

export const authenticated = (next: any) => async(root: any, args: any, context: any, info: any) =>{

    const {token, authService}: {token: string, authService: IAuthService} = context;

    try{
        const {id} = await authService.verifyToken(token, `${process.env.PASSWORD_SECRET_KEY}`);
        context = Object.assign({},context,{userId : id});

    }catch(err){
        throw new AuthenticationError("Invalid token");
    }
    
    return next(root, args, context, info);
};