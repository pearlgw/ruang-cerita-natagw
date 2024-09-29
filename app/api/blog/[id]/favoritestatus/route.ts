import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '@/auth';
const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const session = await auth();

    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { id } = params;

        const like = await prisma.like.findFirst({
            where: {
                blogId: id,
                userId: session.user?.id || '',
            },
        });

        const isLiked = like ? true : false;

        return NextResponse.json({ isLiked });
    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error', error: String(error) }, { status: 500 });
    }
}
