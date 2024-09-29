import { auth } from "@/auth";
import { prisma } from "./prisma";

export const getAllBlogs = async () => {
    try {
        const allblogs = await prisma.blog.findMany({
            include: {
                user: {
                    select: {
                        name: true
                    }
                },
            }
        })
        return allblogs;
    } catch (error) {
        console.log(error)
    }
}

export const getBlogs = async () => {
    const session = await auth();
    const role = session?.user.role;
    if (role === 'admin') {
        try {
            const blogs = await prisma.blog.findMany({
                where: {
                    user: {
                        role: 'admin'
                    }
                },
                include: { user: { select: { name: true } } }
            });
            return blogs;
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            const blogs = await prisma.blog.findMany({
                where: { userId: session?.user.id },
                include: { user: { select: { name: true } } }
            });
            return blogs;
        } catch (error) {
            console.log(error);
        }
    }
}

export const getLikes = async () => {
    const session = await auth();
    if (session) {
        try {
            const likes = await prisma.like.findMany({
                where: {
                    userId: session.user.id
                },
                include: {
                    blog: {
                        select: {
                            id: true,
                            title: true,
                            content: true,
                        }
                    },
                    user: {
                        select: {
                            name: true
                        }
                    }
                }
            })
            return likes;
        } catch (error) {
            console.log(error)
        }
    }
}