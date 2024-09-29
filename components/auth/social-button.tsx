import { signIn } from "@/auth";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io5";

export const GoogleButton = () => {
    return (
        <form action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/dashboard" });
        }}>
            <button type="submit" className="flex items-center justify-center gap-1 py-2.5 rounded-lg uppercase text-white font-medium text-sm bg-blue-500 hover:bg-blue-800 w-full">
                <IoLogoGoogle />
                Sign In With Google
            </button>
        </form>
    )
}

export const GithubButton = () => {
    return (
        <form action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/dashboard" });
        }}>
            <button type="submit" className="flex items-center justify-center gap-1 py-2.5 rounded-lg uppercase text-white font-medium text-sm bg-gray-500 hover:bg-gray-800 w-full">
                <IoLogoGithub />
                Sign In With Github
            </button>
        </form>
    )
}