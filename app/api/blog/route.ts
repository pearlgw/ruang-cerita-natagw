import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
const prisma = new PrismaClient();

export const POST = async (request: Request) => {
    const session = await auth();

    const { title, content } = await request.json();
    try {
        const blog = await prisma.blog.create({
            data: {
                title,
                content,
                userId: session?.user.id,
            }
        });
        return NextResponse.json(blog, { status: 201 });
    } catch (error) {
        console.log(error);
    }
}