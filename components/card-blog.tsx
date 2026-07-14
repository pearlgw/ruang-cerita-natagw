import { getAllBlogs } from "@/lib/data"
import BlogCardItem from "./blog-card-item";
import { IoAlertCircleOutline } from "react-icons/io5";

const CardBlog = async () => {
    const allblogs = await getAllBlogs();
    const approvedBlogs = allblogs?.filter(blog => blog.status === 'approved') || [];

    if (approvedBlogs.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center text-center p-12 bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl max-w-md mx-auto shadow-sm">
                <IoAlertCircleOutline className="text-indigo-400 text-5xl mb-4" />
                <h3 className="font-bold text-slate-800 text-lg">Belum Ada Karya</h3>
                <p className="text-slate-500 text-sm mt-1 max-w-xs leading-relaxed">
                    Saat ini belum ada cerita yang diterbitkan. Silakan masuk ke dashboard dan tulis karya pertamamu!
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {approvedBlogs.map((blog) => (
                <BlogCardItem key={blog.id} blog={blog} />
            ))}
        </div>
    )
}

export default CardBlog
