import {TYPES} from "./types";
import container from "./inversify.config";
import {ILinkRepository, IUserRepository, IAuthService} from "../modules/repositories/interfaces";

const linkRepository: ILinkRepository = container.get<ILinkRepository>(TYPES.ILinkRepository);
const userRepository: IUserRepository = container.get<IUserRepository>(TYPES.IUserRepository);
const authService: IAuthService = container.get<IAuthService>(TYPES.IAuthService);

export {
    linkRepository,
    userRepository,
    authService
}