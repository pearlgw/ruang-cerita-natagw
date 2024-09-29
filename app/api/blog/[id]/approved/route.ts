import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {
    const blog = await prisma.blog.update({
        where: {
            id: params.id
        },
        data: {
            status: "approved"
        }
    });
    return NextResponse.json(blog, { status: 200 });
}