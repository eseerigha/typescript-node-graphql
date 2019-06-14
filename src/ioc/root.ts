import {TYPES} from "./types";
import container from "./inversify.config";
import {ILinkRepository, IUserRepository} from "../modules/repositories/interfaces";

const linkRepository: ILinkRepository = container.get<ILinkRepository>(TYPES.ILinkRepository);
const userRepository: IUserRepository = container.get<IUserRepository>(TYPES.IUserRepository);

export {
    linkRepository,
    userRepository
}