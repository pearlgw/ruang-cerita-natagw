import BlogTable from "@/components/blog-table"
import { Metadata } from "next"
import AddBlog from "./add-blog"

export const metadata: Metadata = {
    title: 'My Blog',
}

const BlogPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="max-w-screen-xl mx-auto py-10 px-5">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold">Blog List</h1>
                    <AddBlog />
                </div>
                <BlogTable />
            </div>
        </div>
    )
}

export default BlogPage
