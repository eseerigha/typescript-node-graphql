import { injectable} from "inversify";
import {IAuthService} from "../interfaces";
import {hashSync, compareSync} from "bcryptjs";
import {sign, verify} from "jsonwebtoken";
import {IUserDto} from "../../dto";

@injectable()
class AuthService implements IAuthService {

    constructor(){}

    hashPassword(plainText: string): string {
        return hashSync(plainText);
    }

    generateToken(user: IUserDto, secretKey: string): Promise<string> {

        return new Promise((resolve,reject)=>{
            sign(user,secretKey,{expiresIn: "365 days"}, (err,token)=>{
                if(err) reject(err);
                resolve(token);
            });
        });
    }

    verifyPassword(plainText: string, hashedPassword: string): boolean {
        return compareSync(plainText,hashedPassword);
    }

    verifyToken(token: string, secretKey: string): Promise<IUserDto> {
        
        return new Promise((resolve, reject)=>{
            
            verify(token,secretKey,(err,response:any)=>{
                if(err) reject(err);
                resolve(response);
            });

        });
    }
}

export default AuthService;