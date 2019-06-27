import { injectable} from "inversify";
import {IAuthService} from "../interfaces";
import {hashSync, compareSync} from "bcryptjs";
import {sign, verify} from "jsonwebtoken";
import {IUserDto} from "../../dto";

@injectable()
class AuthService implements IAuthService {

    constructor(){
        
    }

    hashPassword(plainText: string): string {
        return hashSync(plainText);
    }

    generateToken(user: IUserDto, secretKey: string): string {
        return sign(user,secretKey,{expiresIn: "365 days"});
    }

    verifyPassword(plainText: string, hashedPassword: string): boolean {
        return compareSync(plainText,hashedPassword);
    }

    verifyToken(token: string, secretKey: string): any {
        return verify(token,secretKey);
    }
}

export default AuthService;