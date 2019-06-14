import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import {ILinkRepository,IUserRepository} from "../modules/repositories/interfaces";
import {LinkRepository,UserRepository} from "../modules/repositories/implementations";

const container = new Container();
container.bind<ILinkRepository>(TYPES.ILinkRepository).to(LinkRepository);
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);

export default container;