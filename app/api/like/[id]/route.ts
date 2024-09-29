import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

const prisma = new PrismaClient();

export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
    const session = await auth();

    if (!session || !session.user) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;

    try {
        // Mencari like yang ingin dihapus
        const like = await prisma.like.findFirst({
            where: {
                userId: userId,
                blogId: params.id,
            },
        });

        if (!like) {
            return NextResponse.json({ message: 'Like not found' }, { status: 404 });
        }

        // Menghapus like
        await prisma.like.delete({
            where: { id: like.id },
        });

        return NextResponse.json({ message: 'Like deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting like:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
};
