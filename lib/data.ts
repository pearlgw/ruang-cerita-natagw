import { auth } from "@/auth";
import { prisma } from "./prisma";

export const getAllBlogs = async () => {
    try {
        const allblogs = await prisma.blog.findMany({
            include: {
                user: {
                    select: {
                        name: true,
                        image: true
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

export const getStats = async () => {
    try {
        const totalBlogs = await prisma.blog.count();
        const totalWriters = await prisma.user.count({
            where: {
                blogs: {
                    some: {}
                }
            }
        });
        const totalUsers = await prisma.user.count();

        return {
            totalBlogs,
            totalWriters,
            totalUsers
        };
    } catch (error) {
        console.error("Error fetching stats:", error);
        return {
            totalBlogs: 0,
            totalWriters: 0,
            totalUsers: 0
        };
    }
}