import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const PATCH = async (request: Request, { params }: { params: { id: string } }) => {
    const { title, content } = await request.json();
    const blog = await prisma.blog.update({
        where: {
            id: params.id
        },
        data: {
            title,
            content,
        }
    });
    return NextResponse.json(blog, { status: 200 });
}

export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
    const blog = await prisma.blog.delete({
        where: {
            id: params.id
        }
    });
    return NextResponse.json(blog, { status: 200 });
}