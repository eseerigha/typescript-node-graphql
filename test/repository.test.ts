import "reflect-metadata";
import {stub} from "sinon";
import {expect} from "chai";

import LinkSchema from "../src/modules/schema/link.schema";
import {linkRepository} from "../src/ioc/root";
import {ILinkDto, IUserDto} from "../src/modules/dto"


describe("Repository Test", ()=>{

    const linkDtoStub : ILinkDto = {
        id: "1",
        description: "Link to my blog",
        url: "www.google.com",
        postedBy: {
            id: "1",
            email: "ese.erigha@gmail.com",
            name: "Ese Erigha",
            password: "fzanimotto"
        }
    }; 

    const mongooseSaveStub = stub(LinkSchema.prototype,"save").resolves()
});