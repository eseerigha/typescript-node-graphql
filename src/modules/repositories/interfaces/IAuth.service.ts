
import {IUserDto} from "../../dto"

export interface IAuthService {

    hashPassword(plainText: string): string
    generateToken(user: IUserDto, secretKey: string): Promise<string>
    verifyPassword(plainText: string, hashedPassword: string): boolean
    verifyToken(token: string, secretKey: string): IUserDto
}