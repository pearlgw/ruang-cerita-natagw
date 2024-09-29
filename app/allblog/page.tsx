import AllBlogTable from "@/components/allblog-table"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'All Blogs',
}

const AllBlogPage = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="max-w-screen-xl mx-auto py-10 px-5">
                <h1 className="text-2xl font-bold">All Blogs List</h1>
                <AllBlogTable />
            </div>
        </div>
    )
}

export default AllBlogPage
