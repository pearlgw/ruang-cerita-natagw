import { signIn } from "@/auth";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io5";

export const GoogleButton = () => {
    return (
        <form action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/dashboard" });
        }} className="w-full">
            <button type="submit" className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all duration-200 active:scale-[0.98] shadow-sm">
                <IoLogoGoogle className="text-lg text-red-500" />
                <span>Sign in with Google</span>
            </button>
        </form>
    )
}

export const GithubButton = () => {
    return (
        <form action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/dashboard" });
        }} className="w-full">
            <button type="submit" className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-200 active:scale-[0.98] shadow-md shadow-slate-900/10">
                <IoLogoGithub className="text-lg text-white" />
                <span>Sign in with GitHub</span>
            </button>
        </form>
    )
}