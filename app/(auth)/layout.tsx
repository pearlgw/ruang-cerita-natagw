import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-[100dvh] max-h-[100dvh] flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
            {/* Ambient Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-lg h-[500px] pointer-events-none opacity-60">
                <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-indigo-200/40 blur-[80px]" />
                <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-purple-200/30 blur-[85px]" />
            </div>

            <div className="w-full max-w-md bg-white/70 backdrop-blur-md border border-white/60 shadow-xl shadow-slate-100/50 rounded-3xl overflow-hidden relative transition-all duration-300 flex flex-col my-auto max-h-[calc(100dvh-2rem)]">
                {/* Visual Top Highlight Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 shrink-0" />
                
                <div className="p-6 sm:p-8 flex flex-col overflow-y-auto">
                    <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors mb-6 w-fit shrink-0">
                        <IoArrowBackOutline className="text-sm" />
                        <span>Kembali ke Beranda</span>
                    </Link>
                    
                    <div className="flex-grow">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
