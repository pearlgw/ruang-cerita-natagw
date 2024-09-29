/* eslint-disable @typescript-eslint/no-unused-vars */
import { type DefaulSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: User & DefaulSession["writer"];
    }

    interface User {
        role: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        sub: string;
        role: string;
    }
}