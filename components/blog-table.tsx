import DeleteBlog from "@/app/blog/delete-blog";
import UpdateBlog from "@/app/blog/update-blog";
import { getBlogs } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const BlogTable = async () => {
    const blogs = await getBlogs();
    if (!blogs?.length) return <h1 className="text-lg">No Blog Found</h1>
    return (
        <table className="w-full bg-white mt-3">
            <thead className="border-b border-gray-100">
                <tr>
                    <th className="py-3 px-6 text-left text-sm">Title</th>
                    <th className="py-3 px-6 text-left text-sm">Content</th>
                    <th className="py-3 px-6 text-left text-sm">Status</th>
                    <th className="py-3 px-6 text-left text-sm">Created At</th>
                    <th className="text-sm text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {blogs.map((blog) => (
                    <tr key={blog.id}>
                        <td className="py-3 px-6">{blog.title}</td>
                        <td className="py-3 px-6">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: blog.content.split(' ').slice(0, 5).join(' ') +
                                        (blog.content.split(' ').length > 5 ? '...' : '')
                                }}
                            />
                        </td>
                        <td className="py-3 px-6">
                            {blog.status === 'process' && (
                                <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full">
                                    Process
                                </div>
                            )}
                            {blog.status === 'rejected' && (
                                <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-red-800 bg-red-100 rounded-full">
                                    Rejected
                                </div>
                            )}
                            {blog.status === 'approved' && (
                                <div className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                                    Approved
                                </div>
                            )}
                        </td>
                        <td className="py-3 px-6">{formatDate(blog.createdAt.toString())}</td>
                        <td className="flex space-x-2 items-center justify-center p-2">
                            <UpdateBlog blog={blog} />
                            <DeleteBlog blog={blog} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BlogTable
