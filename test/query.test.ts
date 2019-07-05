import "reflect-metadata";
import {stub} from "sinon";
import {expect} from "chai";

import {graphql} from "graphql";
import schema from "../src/graphql";
import {linkRepository,links,authService} from "./mocks";

import {IPaginationQuery} from "../src/modules/query";
import {feed} from "../src/graphql/resolvers/query"
 

describe(" Graphql Query test",()=>{

    it("should return the right data for the feeds query",async()=>{
        
        const variables: IPaginationQuery = {
            limit: 10,
            page: 1,
            lean: true
        };

        const context = {
                            authService,
                            linkRepository, 
                            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMGU1NDc5Yjc2NzkyNjY5NGY3YmI0ZCIsImVtYWlsIjoiZXNlLmVyaWdoYUBnbWFpbC5jb20iLCJuYW1lIjoiRXNlIEVyaWdoYSIsInBhc3N3b3JkIjoiJDJhJDEwJHdrSWthY2tBWTNTaEhUMEh6MmEyWWUxdTUwQ3l0Mi9kMmRpczZVQ1JtVGJYQzdaQmg2bFBtIiwiaWF0IjoxNTYyMjgwMjk3LCJleHAiOjE1OTM4MTYyOTd9.XvedHIY4uuflntkM5OsrR6qrR9oIbBl_dVvzBk2P7ig"}

        const query = `query {
            feed(limit: 1, page: 1) {
               limit
               page
            }
        }`;

        const result: any = await feed(links[0],variables,context,{});
        expect(result.docs.length).to.equals(2);
    });
});