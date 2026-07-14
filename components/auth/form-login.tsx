"use client"

import { signInCredentials } from "@/lib/action";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useState } from "react";
import { LoginButton } from "../button";
import { IoAlertCircleOutline, IoWarningOutline, IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const FormLogin = () => {
    const [state, formAction] = useFormState(signInCredentials, null);
    const [showPassword, setShowPassword] = useState(false);
    return (
        <form action={formAction} className="space-y-4">
            {state?.message ? (
                <div className="p-4 text-xs font-medium text-red-600 rounded-xl bg-red-50 border border-red-100/50 flex items-center gap-2" role="alert">
                    <IoAlertCircleOutline className="text-lg flex-shrink-0" />
                    <span>{state?.message}</span>
                </div>
            ) : null}
            <div>
                <label htmlFor="email" className="block mb-1.5 text-xs font-semibold text-slate-500">Email Address</label>
                <input 
                    type="email" 
                    name="email" 
                    className="bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-slate-800 rounded-xl w-full px-4 py-2.5 focus:outline-none transition-all duration-200 placeholder-slate-400/80 text-sm shadow-inner" 
                    placeholder="nama@email.com" 
                />
                {state?.error?.email && (
                    <div className="flex items-center gap-1 mt-1.5 text-xs text-red-500" aria-live="polite" aria-atomic="true">
                        <IoWarningOutline className="flex-shrink-0" />
                        <span>{state.error.email}</span>
                    </div>
                )}
            </div>
            <div>
                <label htmlFor="password" className="block mb-1.5 text-xs font-semibold text-slate-500">Password</label>
                <div className="relative">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        name="password" 
                        className="bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-slate-800 rounded-xl w-full px-4 py-2.5 pr-10 focus:outline-none transition-all duration-200 placeholder-slate-400/80 text-sm shadow-inner" 
                        placeholder="••••••••" 
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 focus:outline-none transition-colors"
                    >
                        {showPassword ? <IoEyeOffOutline className="text-lg" /> : <IoEyeOutline className="text-lg" />}
                    </button>
                </div>
                {state?.error?.password && (
                    <div className="flex items-center gap-1 mt-1.5 text-xs text-red-500" aria-live="polite" aria-atomic="true">
                        <IoWarningOutline className="flex-shrink-0" />
                        <span>{state.error.password}</span>
                    </div>
                )}
            </div>
            <div className="pt-2">
                <LoginButton />
            </div>
            <p className="text-xs text-slate-500 text-center mt-2">
                Belum punya akun?
                <Link href="/register">
                    <span className="font-semibold pl-1.5 text-indigo-600 hover:text-indigo-700 hover:underline underline-offset-4 transition-all">Daftar di sini</span>
                </Link>
            </p>
        </form>
    )
}

export default FormLogin
