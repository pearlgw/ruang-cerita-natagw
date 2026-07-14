import ApprovedButton from "@/app/allblog/approved";
import RejectedButton from "@/app/allblog/rejected";
import ShowButton from "@/app/allblog/show";
import { getAllBlogs } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { IoAlertCircleOutline, IoCalendarOutline, IoPersonOutline } from "react-icons/io5";

const AllBlogTable = async () => {
    const allblogs = await getAllBlogs();
    
    if (!allblogs?.length) {
        return (
            <div className="flex flex-col items-center justify-center text-center p-12 bg-white">
                <IoAlertCircleOutline className="text-slate-400 text-5xl mb-4" />
                <h3 className="font-bold text-slate-800 text-lg">Tidak Ada Cerita</h3>
                <p className="text-slate-500 text-sm mt-1 max-w-xs leading-relaxed">
                    Belum ada cerita yang ditulis oleh pengguna manapun saat ini.
                </p>
            </div>
        );
    }
    
    return (
        <div className="overflow-x-auto w-full">
            <table className="w-full min-w-full divide-y divide-slate-100">
                <thead className="bg-slate-50/70">
                    <tr>
                        <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Judul</th>
                        <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Konten</th>
                        <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Penulis</th>
                        <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                        <th className="py-4 px-6 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Tanggal Dibuat</th>
                        <th className="py-4 px-6 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">Moderasi / Aksi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                    {allblogs.map((allblog) => (
                        <tr key={allblog.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="py-4 px-6 font-semibold text-slate-800 text-sm">{allblog.title}</td>
                            <td className="py-4 px-6 text-sm text-slate-500 max-w-xs truncate">
                                <div
                                    className="truncate text-slate-500 text-sm"
                                    dangerouslySetInnerHTML={{
                                        __html: allblog.content.split(' ').slice(0, 5).join(' ') +
                                            (allblog.content.split(' ').length > 5 ? '...' : '')
                                    }}
                                />
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-700 font-medium capitalize whitespace-nowrap">
                                <span className="inline-flex items-center gap-1.5">
                                    <IoPersonOutline className="text-slate-400" />
                                    {allblog.user?.name || "Anonim"}
                                </span>
                            </td>
                            <td className="py-4 px-6 text-sm">
                                {allblog.status === 'process' && (
                                    <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 rounded-full">
                                        Proses
                                    </span>
                                )}
                                {allblog.status === 'rejected' && (
                                    <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-red-600 bg-red-50 border border-red-100 rounded-full">
                                        Ditolak
                                    </span>
                                )}
                                {allblog.status === 'approved' && (
                                    <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full">
                                        Disetujui
                                    </span>
                                )}
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-500 whitespace-nowrap">
                                <span className="inline-flex items-center gap-1.5">
                                    <IoCalendarOutline className="text-slate-400" />
                                    {formatDate(allblog.createdAt.toString())}
                                </span>
                            </td>
                            <td className="py-4 px-6 text-sm whitespace-nowrap">
                                <div className="flex space-x-2.5 items-center justify-center">
                                    <ShowButton blog={allblog} />
                                    <ApprovedButton blog={allblog} />
                                    <RejectedButton blog={allblog} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllBlogTable;
