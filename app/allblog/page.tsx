import AllBlogTable from "@/components/allblog-table"
import { Metadata } from "next"
import { IoPeopleOutline } from "react-icons/io5"

export const metadata: Metadata = {
    title: 'All Blogs List - Ruang Cerita Admin',
}

const AllBlogPage = () => {
    return (
        <div className="max-w-screen-xl w-full mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="border-b border-slate-200/60 pb-5">
                <h1 className="text-2xl font-extrabold text-slate-800 flex items-center gap-2">
                    <IoPeopleOutline className="text-indigo-600" />
                    <span>Semua Cerita (Admin)</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Moderasi, setujui, tolak, atau kelola seluruh karya tulis dari kontributor.
                </p>
            </div>
            
            <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm shadow-slate-100/50">
                <AllBlogTable />
            </div>
        </div>
    )
}

export default AllBlogPage
