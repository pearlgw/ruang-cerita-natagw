import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const POST = async (request: Request) => {
    const session = await auth();

    try {
        const { blogId } = await request.json();
        const blog = await prisma.like.create({
            data: {
                blogId,
                userId: session?.user.id,
            }
        });
        return NextResponse.json(blog, { status: 201 });
    } catch (error) {
        console.log(error);
    }
}