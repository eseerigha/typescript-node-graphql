import "reflect-metadata";
import {stub} from "sinon";
import {expect} from "chai";

import {authService} from "../src/ioc/root";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {IUserDto} from "../src/modules/dto";

describe("Authservice test",()=>{

    const stubHash = "abcdefghij";
    const stubPassword = "Hello World";
    const bcryptStub = stub(bcryptjs,"hashSync").withArgs(stubPassword).returns(stubHash);

    it("should correctly hash password",()=>{
    
        const hashedPassword = authService.hashPassword(stubPassword);
        expect(hashedPassword).to.equals(stubHash);
        expect(bcryptStub.calledOnce).to.be.true;
    });

    it("should call hash function exactly once",()=>{
        expect(bcryptStub.calledOnce).to.be.true;
    });

    it("should correctly generate token",async ()=>{
        
        const stubUser : IUserDto = {
            id: "1",
            name: "Ese Erigha",
            email: "ese.erigha@gmail.com",
            password: "groupon"
        };

        const stubToken = "abcdefghijklmnop";
        const stubSecretKey = "HelloWorld";
        const signStub = stub(jsonwebtoken,"sign").yields(null,stubToken);
        const token = await authService.generateToken(stubUser,stubSecretKey);
        
        expect(token).to.equals(stubToken);
        expect(signStub.calledOnce).to.be.true;
    });
});