import BlogTable from "@/components/blog-table"
import { Metadata } from "next"
import AddBlog from "./add-blog"
import { IoBookOutline } from "react-icons/io5"

export const metadata: Metadata = {
    title: 'My Blog - Ruang Cerita',
}

const BlogPage = () => {
    return (
        <div className="max-w-screen-xl w-full mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 pb-5">
                <div>
                    <h1 className="text-2xl font-extrabold text-slate-800 flex items-center gap-2">
                        <IoBookOutline className="text-indigo-600" />
                        <span>Cerita Saya</span>
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Kelola tulisan cerita, opini, puisi, atau karya kata yang telah Anda buat.
                    </p>
                </div>
                <div>
                    <AddBlog />
                </div>
            </div>
            
            <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm shadow-slate-100/50">
                <BlogTable />
            </div>
        </div>
    )
}

export default BlogPage
