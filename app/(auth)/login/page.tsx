import FormLogin from "@/components/auth/form-login"
import { GithubButton, GoogleButton } from "@/components/auth/social-button"

const Login = ({ searchParams }: { searchParams?: { error?: string } }) => {
    const params = searchParams?.error;
    return (
        <div className="space-y-5 sm:space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-zinc-800 tracking-tight">Welcome Back</h1>
                <p className="text-sm text-zinc-500 mt-1">Please enter your credentials to sign in.</p>
            </div>
            {params === "OAuthAccountNotLinked" ? (
                <div className="p-4 text-sm text-red-600 rounded-xl bg-red-50 border border-red-100" role="alert">
                    <span className="font-medium">Account is already linked to another login provider.</span>
                </div>
            ) : null}
            <FormLogin />
            <div className="my-5 flex items-center before:flex-1 before:border-t before:border-zinc-200/60 after:flex-1 after:border-t after:border-zinc-200/60">
                <p className="mx-4 text-center text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    Or continue with
                </p>
            </div>
            <div className="space-y-3">
                <GoogleButton />
                <GithubButton />
            </div>
        </div>
    )
}

export default Login
