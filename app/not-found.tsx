import Link from "next/link";
import { IoHomeOutline, IoHelpCircleOutline } from "react-icons/io5";

export default function NotFound() {
    return (
        <div className="w-full h-[100dvh] flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-[#f8fafc]">
            {/* Ambient Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-lg h-[500px] pointer-events-none opacity-60">
                <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-indigo-200/40 blur-[80px]" />
                <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-purple-200/30 blur-[85px]" />
            </div>

            <div className="w-full max-w-md bg-white/70 backdrop-blur-md border border-white/60 shadow-xl shadow-slate-100/50 rounded-3xl overflow-hidden relative p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-300">
                {/* Visual Top Highlight Bar */}
                <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />
                
                <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-6 animate-bounce" style={{ animationDuration: '3s' }}>
                    <IoHelpCircleOutline className="text-4xl" />
                </div>

                <h1 className="text-8xl font-black tracking-tighter bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
                    404
                </h1>

                <h2 className="text-xl font-extrabold text-slate-800 mt-4">Halaman Tidak Ditemukan</h2>
                
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    Maaf, cerita atau halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan ke ruang lain.
                </p>

                <div className="w-full mt-8">
                    <Link 
                        href="/" 
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all duration-300 active:scale-[0.98] shadow-md shadow-indigo-100 hover:shadow-indigo-200"
                    >
                        <IoHomeOutline className="text-lg" />
                        <span>Kembali ke Beranda</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
