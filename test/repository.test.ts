import "reflect-metadata";
import {stub} from "sinon";
import {expect} from "chai";

import {PaginateResult} from "mongoose";
import LinkSchema from "../src/modules/schema/link.schema";
import {linkRepository} from "../src/ioc/root";
import {ILinkDto, IUserDto} from "../src/modules/dto";
import {ILinkEntity} from "../src/modules/entities";
import {IBaseQuery, IPaginationQuery} from "../src/modules/query";


describe("Repository Test", ()=>{

    const linkEntity: any = {
        _id: "1",
        description: "Link to my blog",
        url: "www.google.com",
        postedBy: {
            id: "1",
            email: "ese.erigha@gmail.com",
            name: "Ese Erigha",
            password: "fzanimotto"
        }
    };

    const modelMethods: any = {
        lean: stub().returnsThis(),
        exec: stub().returns(linkEntity)
    };

    it("should create a new entity", async()=>{

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
        const mongooseSaveStub = stub(LinkSchema.prototype,"save").resolves(linkDtoStub);
        const newLinkDto = await linkRepository.create(linkDtoStub);
        expect(newLinkDto).to.be.equals(linkDtoStub);
        mongooseSaveStub.restore();
    });

    it("should paginate the response of the query",async ()=>{

        
        const docs: ILinkEntity[] = [];
        docs.push(linkEntity);

        const stubPaginatedResult: PaginateResult<ILinkEntity> = {
            docs,
            total: 10,
            limit: 10 
        };

        const paginateOptions: IPaginationQuery = {
            limit: 10,
            page: 1
        };
        const query: IBaseQuery = {

        };

        const stubPaginate = stub(LinkSchema,"paginate").resolves(stubPaginatedResult);
        const paginatedResult = await linkRepository.findAll(query,paginateOptions);
        expect(paginatedResult).to.equals(stubPaginatedResult);
        stubPaginate.restore();

    });

    it("should findOne item in database",async ()=>{
        const stubFindOne = stub(LinkSchema,"findOne").returns(modelMethods) 
        let query: IBaseQuery = {};
        const entity = await linkRepository.findOne(query);
        expect(entity).to.be.equals(linkEntity);
    });


    it("should findOneById in the database",async ()=>{
        const stubFindById = stub(LinkSchema,"findById").returns(modelMethods) 
        let entityId: string = "1";
        const entity = await linkRepository.findOneById(entityId);
        expect(entity._id).to.be.equals(linkEntity._id);
    });

});