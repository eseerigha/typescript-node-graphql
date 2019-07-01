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
    const stubToken = "abcdefghijklmnop";
    const stubSecretKey = "HelloWorld";
    const stubUser : IUserDto = {
        id: "1",
        name: "Ese Erigha",
        email: "ese.erigha@gmail.com",
        password: "groupon"
    };

    it("should correctly hash password",()=>{

        const hashedPassword = authService.hashPassword(stubPassword);
        expect(hashedPassword).to.equals(stubHash);
        expect(bcryptStub.calledOnce).to.be.true;

    });

    it("should call hash function exactly once",()=>{

        expect(bcryptStub.calledOnce).to.be.true;

    });

    it("should correctly generate token",async ()=>{
        
        const signStub = stub(jsonwebtoken,"sign").yields(null,stubToken);
        const token = await authService.generateToken(stubUser,stubSecretKey);
        
        expect(token).to.equals(stubToken);
        expect(signStub.calledOnce).to.be.true;
    });

    it("should verify password", ()=>{
        
        const stubCompareSync = stub(bcryptjs,"compareSync").withArgs(stubPassword, stubHash).returns(true);
        const verifyPasswordStatus = authService.verifyPassword(stubPassword, stubHash);
        expect(verifyPasswordStatus).to.be.true;
        expect(stubCompareSync.calledOnce).to.be.true;
    });

    it("should correctly verify token",async ()=>{
        
        const verifyStub = stub(jsonwebtoken,"verify").yields(null,stubUser);
        const user = await authService.verifyToken(stubToken,stubSecretKey);
        
        expect(user).to.equals(stubUser);
        expect(verifyStub.calledOnce).to.be.true;
    });
    
    
});