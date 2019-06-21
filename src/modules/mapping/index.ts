let automapper = require("automapper-ts");


export const SCHEMATYPES = {
    LinkSchema : 'LinkSchema',
    UserSchema : 'UserSchema'
};

export const DTOTYPES = {
    LinkDto : 'LinkDto',
    UserDto : 'UserDto'
};


//Mapping for Link Schema
automapper
    .createMap(SCHEMATYPES.LinkSchema, DTOTYPES.LinkDto)
    .forMember('id', function (opts: any) { opts.mapFrom('_id'); })
    .forMember('description', function (opts: any) { opts.mapFrom('description'); })
    .forMember('url', function (opts: any) { opts.mapFrom('url'); })
    .forSourceMember('__v',function (opts: any) { opts.ignore(); })
    .forSourceMember('$__',function (opts: any) { opts.ignore(); })
    .forSourceMember('isNew',function (opts: any) { opts.ignore(); })
    .forSourceMember('errors',function (opts: any) { opts.ignore(); })
    .forSourceMember('_doc',function (opts: any) { opts.ignore(); })
    .forSourceMember('$locals',function (opts: any) { opts.ignore(); })

automapper
    .createMap(SCHEMATYPES.UserSchema, DTOTYPES.UserDto)
    .forMember('id', function (opts: any) { opts.mapFrom('_id'); })
    .forMember('email', function (opts: any) { opts.mapFrom('email'); })
    .forMember('name', function (opts: any) { opts.mapFrom('name'); })
    .forMember('password', function (opts: any) { opts.mapFrom('password'); })
    .forSourceMember('__v',function (opts: any) { opts.ignore(); })
    .forSourceMember('$__',function (opts: any) { opts.ignore(); })
    .forSourceMember('isNew',function (opts: any) { opts.ignore(); })
    .forSourceMember('errors',function (opts: any) { opts.ignore(); })
    .forSourceMember('_doc',function (opts: any) { opts.ignore(); })
    .forSourceMember('$locals',function (opts: any) { opts.ignore(); })
    
export default automapper;