import FormRegister from "@/components/auth/form-register"

const Register = () => {
    return (
        <div className="space-y-4 sm:space-y-5">
            <div>
                <h1 className="text-2xl font-bold text-zinc-800 tracking-tight">Create Account</h1>
                <p className="text-sm text-zinc-500 mt-1">Get started by filling out your details below.</p>
            </div>
            <FormRegister />
        </div>
    )
}

export default Register
