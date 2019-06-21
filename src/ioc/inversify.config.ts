import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import {ILinkRepository,IUserRepository,IAuthService} from "../modules/repositories/interfaces";
import {LinkRepository,UserRepository, AuthService} from "../modules/repositories/implementations";

const container = new Container();
container.bind<ILinkRepository>(TYPES.ILinkRepository).to(LinkRepository);
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
container.bind<IAuthService>(TYPES.IAuthService).to(AuthService);

export default container;