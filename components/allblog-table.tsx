import ApprovedButton from "@/app/allblog/approved";
import RejectedButton from "@/app/allblog/rejected";
import ShowButton from "@/app/allblog/show";
import { getAllBlogs } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const AllBlogTable = async () => {
    const allblogs = await getAllBlogs();
    if (!allblogs?.length) return <h1 className="text-2xl">No Blog Found</h1>
    return (
        <table className="w-full bg-white mt-3">
            <thead className="border-b border-gray-100">
                <tr>
                    <th className="py-3 px-6 text-left text-sm">Title</th>
                    <th className="py-3 px-6 text-left text-sm">Content</th>
                    <th className="py-3 px-6 text-left text-sm">Writer</th>
                    <th className="py-3 px-6 text-left text-sm">Status</th>
                    <th className="py-3 px-6 text-left text-sm">Created At</th>
                    <th className="text-sm text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {allblogs.map((allblog) => (
                    <tr key={allblog.id}>
                        <td className="py-3 px-6">{allblog.title}</td>
                        <td className="py-3 px-6">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: allblog.content.split(' ').slice(0, 5).join(' ') +
                                        (allblog.content.split(' ').length > 5 ? '...' : '')
                                }}
                            />
                        </td>
                        <td className="py-3 px-6 capitalize">{allblog.user?.name}</td>
                        <td className="py-3 px-6">
                            {allblog.status === 'process' && (
                                <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full">
                                    Process
                                </div>
                            )}
                            {allblog.status === 'rejected' && (
                                <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">
                                    Rejected
                                </div>
                            )}
                            {allblog.status === 'approved' && (
                                <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                                    Approved
                                </div>
                            )}
                        </td>
                        <td className="py-3 px-6">{formatDate(allblog.createdAt.toString())}</td>
                        <td className="flex space-x-2 items-center justify-center p-2">
                            <ShowButton blog={allblog} />
                            <ApprovedButton blog={allblog} />
                            <RejectedButton blog={allblog} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default AllBlogTable
