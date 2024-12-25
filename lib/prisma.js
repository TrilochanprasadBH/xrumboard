import {PrismaClient} from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}

//globalThis.prisma : This global variable ensures that prisma client instance is reused across hot reloads
// during development, without this each time your application reloads a new instance of prisma client would be create
//potentially leading to connection issue
