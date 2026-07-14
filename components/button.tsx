"use client";
import { useFormStatus } from "react-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

export const RegisterButton = () => {
    const { pending } = useFormStatus();
    return (
        <button 
            type="submit" 
            disabled={pending} 
            className="w-full flex items-center justify-center gap-2 text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 disabled:opacity-60 font-bold rounded-xl px-5 py-3 text-center text-sm transition-all duration-300 shadow-md shadow-indigo-100 hover:shadow-lg hover:shadow-indigo-200/50 active:scale-[0.98]"
        >
            {pending ? (
                <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Mendaftarkan...</span>
                </span>
            ) : (
                <span className="flex items-center gap-1">
                    <span>Daftar Sekarang</span>
                    <IoArrowForwardOutline />
                </span>
            )}
        </button>
    )
}

export const LoginButton = () => {
    const { pending } = useFormStatus();
    return (
        <button 
            type="submit" 
            disabled={pending} 
            className="w-full flex items-center justify-center gap-2 text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 disabled:opacity-60 font-bold rounded-xl px-5 py-3 text-center text-sm transition-all duration-300 shadow-md shadow-indigo-100 hover:shadow-lg hover:shadow-indigo-200/50 active:scale-[0.98]"
        >
            {pending ? (
                <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Memproses Masuk...</span>
                </span>
            ) : (
                <span className="flex items-center gap-1">
                    <span>Masuk ke Akun</span>
                    <IoArrowForwardOutline />
                </span>
            )}
        </button>
    )
}