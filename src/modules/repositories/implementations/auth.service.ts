
import {IAuthService} from "../interfaces";
import {hashSync, compareSync} from "bcryptjs";
import {sign} from "jsonwebtoken";
import {IUserDto} from "../../dto";

class AuthService implements IAuthService {

    constructor(){

    }

    hashPassword(plainText: string): string {
        return hashSync(plainText);
    }

    generateToken(user: IUserDto, secretKey: string): string {
        return sign(user,secretKey);
    }

    verifyPassword(plainText: string, hashedPassword: string): boolean {
        return compareSync(plainText,hashedPassword);
    }
}

export default AuthService;