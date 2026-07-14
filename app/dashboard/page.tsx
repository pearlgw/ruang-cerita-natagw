import { auth } from "@/auth"
import { getBlogs, getLikes } from "@/lib/data";
import Link from "next/link";
import { IoBookOutline, IoHeartOutline, IoCreateOutline, IoPersonOutline } from "react-icons/io5";

const Dashboard = async () => {
    const session = await auth();
    const userBlogs = await getBlogs() || [];
    const userLikes = await getLikes() || [];
    
    return (
        <div className="max-w-screen-xl w-full mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Welcoming Header Card */}
            <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-3xl p-6 sm:p-8 text-white shadow-lg shadow-indigo-100/50">
                <div className="relative z-10 max-w-xl space-y-2">
                    <span className="text-xs uppercase tracking-widest font-bold text-indigo-200">Panel Kontrol</span>
                    <h1 className="text-2xl sm:text-3xl font-bold">Halo, {session?.user?.name}! 👋</h1>
                    <p className="text-sm text-indigo-100 font-medium leading-relaxed">
                        Selamat datang kembali di Ruang Cerita. Kelola cerita tulisanmu, lihat karya favorit, dan ciptakan karya kata baru hari ini.
                    </p>
                    <div className="pt-2">
                        <Link 
                            href="/blog" 
                            className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-indigo-600 font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm transition-all duration-200 active:scale-[0.98]"
                        >
                            <IoCreateOutline className="text-sm" />
                            <span>Mulai Menulis</span>
                        </Link>
                    </div>
                </div>
                {/* Visual Glow Orbs */}
                <div className="absolute right-0 bottom-0 translate-y-12 translate-x-12 w-64 h-64 rounded-full bg-indigo-400/20 blur-3xl pointer-events-none" />
                <div className="absolute top-0 right-1/4 -translate-y-12 w-32 h-32 rounded-full bg-purple-400/20 blur-2xl pointer-events-none" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm shadow-slate-100/30 flex items-center gap-4">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                        <IoBookOutline className="text-2xl" />
                    </div>
                    <div>
                        <span className="text-xs text-slate-400 font-semibold block">Total Ceritaku</span>
                        <span className="text-xl font-extrabold text-slate-800 block">{userBlogs.length} Karya</span>
                    </div>
                </div>
                
                <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm shadow-slate-100/30 flex items-center gap-4">
                    <div className="p-3 bg-rose-50 text-rose-500 rounded-xl">
                        <IoHeartOutline className="text-2xl" />
                    </div>
                    <div>
                        <span className="text-xs text-slate-400 font-semibold block">Cerita Favorit</span>
                        <span className="text-xl font-extrabold text-slate-800 block">{userLikes.length} Disukai</span>
                    </div>
                </div>

                <div className="bg-white border border-slate-200/60 rounded-2xl p-5 shadow-sm shadow-slate-100/30 flex items-center gap-4">
                    <div className="p-3 bg-amber-50 text-amber-500 rounded-xl">
                        <IoPersonOutline className="text-2xl" />
                    </div>
                    <div>
                        <span className="text-xs text-slate-400 font-semibold block">Peran Pengguna</span>
                        <span className="text-xl font-extrabold text-slate-800 block capitalize">{session?.user?.role || 'Writer'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
