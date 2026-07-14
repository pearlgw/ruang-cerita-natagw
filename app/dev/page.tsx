import Link from "next/link";
import { IoCodeSlashOutline, IoGlobeOutline, IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";

export default function DevPage() {
    return (
        <div className="flex-grow flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden min-h-[100dvh] bg-[#f8fafc]">
            {/* Ambient Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-lg h-[500px] pointer-events-none opacity-65">
                <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-indigo-200/40 blur-[80px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-purple-200/30 blur-[85px] animate-pulse" style={{ animationDuration: '12s' }} />
            </div>

            <div className="w-full max-w-md bg-white/70 backdrop-blur-md border border-white/60 shadow-xl shadow-slate-100/50 rounded-3xl overflow-hidden relative transition-all duration-300 flex flex-col p-6 sm:p-8">
                {/* Visual Top Highlight Bar */}
                <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />
                
                {/* Back to Home Link */}
                <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors mb-6 w-fit shrink-0">
                    <IoArrowBackOutline className="text-sm" />
                    <span>Kembali ke Beranda</span>
                </Link>

                <div className="text-center flex flex-col items-center">
                    {/* Developer Icon Badge */}
                    <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl w-fit mb-6">
                        <IoCodeSlashOutline className="text-3xl" />
                    </div>

                <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100/50 px-3 py-1 rounded-full w-fit mx-auto mb-4">
                    Developer Profile
                </span>

                <h1 className="text-2xl font-black text-slate-800 tracking-tight">
                    Natagw
                </h1>

                <p className="text-xs text-indigo-500 font-bold mt-1">Creator & Developer of Ruang Cerita</p>

                <div className="my-6 border-t border-slate-200/60 w-full" />

                <p className="text-sm text-slate-600 leading-relaxed">
                    Halo! Saya adalah pengembang di balik pembuatan platform <strong>Ruang Cerita & Karya Kata</strong> ini. Website ini dirancang secara khusus untuk menjadi wadah menulis yang modern, bersih, responsif, dan nyaman untuk membagikan tulisan serta inspirasi kepada dunia.
                </p>

                <div className="mt-8 space-y-3 w-full">
                    <a 
                        href="https://me.natagw.my.id" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-650 text-white font-bold text-sm transition-all duration-300 active:scale-[0.98] shadow-md shadow-indigo-100 hover:shadow-indigo-200/80"
                    >
                        <IoGlobeOutline className="text-lg" />
                        <span>Kunjungi Website Saya</span>
                        <IoArrowForwardOutline className="text-sm opacity-80" />
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}
