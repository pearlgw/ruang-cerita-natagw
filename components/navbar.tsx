import { auth, signOut } from "@/auth"
import Image from "next/image"
import Link from "next/link"
import { IoBookOutline, IoBookmarkOutline, IoGridOutline, IoLogOutOutline, IoPeopleOutline, IoHomeOutline } from "react-icons/io5"
import { revalidatePath } from "next/cache"

const Navbar = async () => {
    const session = await auth();
    return (
        <nav className="mx-auto max-w-screen-xl w-[calc(100%-2rem)] bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-md shadow-slate-100/40 rounded-2xl sticky top-4 z-50 mt-4 transition-all duration-300">
            <div className="flex items-center justify-between w-full px-6 py-3">
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="relative overflow-hidden rounded-xl bg-indigo-50 p-1.5 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-inner">
                        <Image src="/gw.png" height={32} width={32} alt="logo" priority className="w-7 h-7 object-cover" />
                    </div>
                    <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent group-hover:opacity-95 transition-opacity">
                        Ruang Cerita
                    </span>
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-5 flex-1 justify-end">
                    <ul className="flex items-center gap-1.5 text-sm font-semibold text-slate-600">
                        <li>
                            <Link href="/" className="flex items-center gap-1.5 hover:bg-indigo-50/70 hover:text-indigo-600 px-3.5 py-2 rounded-xl transition-all duration-200 active:scale-[0.98]">
                                <IoHomeOutline className="text-sm" />
                                <span>Home</span>
                            </Link>
                        </li>
                        {session && (
                            <>
                                <li>
                                    <Link href="/dashboard" className="flex items-center gap-1.5 hover:bg-indigo-50/70 hover:text-indigo-600 px-3.5 py-2 rounded-xl transition-all duration-200 active:scale-[0.98]">
                                        <IoGridOutline className="text-sm" />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="flex items-center gap-1.5 hover:bg-indigo-50/70 hover:text-indigo-600 px-3.5 py-2 rounded-xl transition-all duration-200 active:scale-[0.98]">
                                        <IoBookOutline className="text-sm" />
                                        <span>My Blog</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/favorite" className="flex items-center gap-1.5 hover:bg-indigo-50/70 hover:text-indigo-600 px-3.5 py-2 rounded-xl transition-all duration-200 active:scale-[0.98]">
                                        <IoBookmarkOutline className="text-sm" />
                                        <span>Favorites</span>
                                    </Link>
                                </li>
                                {session.user.role === 'admin' && (
                                    <li>
                                        <Link href="/allblog" className="flex items-center gap-1.5 hover:bg-indigo-50/70 hover:text-indigo-600 px-3.5 py-2 rounded-xl transition-all duration-200 active:scale-[0.98]">
                                            <IoPeopleOutline className="text-sm" />
                                            <span>All Blogs</span>
                                        </Link>
                                    </li>
                                )}
                            </>
                        )}
                    </ul>

                    <div className="flex items-center gap-4 shrink-0 border-l border-slate-200/80 pl-4">
                        {session && (
                            <div className="flex gap-3 items-center">
                                <div className="flex flex-col justify-center text-right">
                                    <span className="font-semibold text-slate-800 text-xs capitalize leading-tight">{session.user.name}</span>
                                    <span className="inline-flex items-center justify-center text-[8px] tracking-wider uppercase font-bold text-indigo-600 bg-indigo-50/85 border border-indigo-100/55 px-2.5 py-0.5 rounded-full mt-1 self-end leading-none">
                                        {session.user.role}
                                    </span>
                                </div>
                                <div className="relative group/avatar cursor-pointer">
                                    {session.user.image ? (
                                        <div className="ring-2 ring-indigo-100 hover:ring-indigo-300 rounded-full transition-all duration-300 p-0.5 bg-white">
                                            <Image 
                                                src={session.user.image} 
                                                alt="avatar" 
                                                width={32} 
                                                height={32} 
                                                className="w-7 h-7 rounded-full object-cover" 
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-[11px] font-extrabold uppercase shadow-sm transition-all duration-300 hover:scale-105 ring-2 ring-indigo-100/80 hover:ring-indigo-300">
                                            {session.user.name ? session.user.name.charAt(0) : "U"}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        
                        {session ? (
                            <form action={async () => {
                                "use server";
                                revalidatePath("/", "layout");
                                await signOut({ redirectTo: "/login" })
                            }}>
                                <button type="submit" className="flex items-center gap-1.5 border border-slate-200/80 hover:border-red-200 bg-white/80 hover:bg-red-50/50 text-slate-600 hover:text-red-600 text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-sm">
                                    <IoLogOutOutline className="text-sm" />
                                    <span>Sign Out</span>
                                </button>
                            </form>
                        ) : (
                            <Link href="/login" className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-md shadow-indigo-100 hover:shadow-indigo-200">
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile Navigation (Hamburger) */}
                <div className="md:hidden flex items-center">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white/95 backdrop-blur-md rounded-2xl w-52 border border-slate-100/50 gap-1 font-semibold text-slate-600">
                            <li><Link href="/" className="px-3 py-2"><IoHomeOutline className="text-lg opacity-80" /> Home</Link></li>
                            {session && (
                                <>
                                    <li><Link href="/dashboard" className="px-3 py-2"><IoGridOutline className="text-lg opacity-80" /> Dashboard</Link></li>
                                    <li><Link href="/blog" className="px-3 py-2"><IoBookOutline className="text-lg opacity-80" /> My Blog</Link></li>
                                    <li><Link href="/favorite" className="px-3 py-2"><IoBookmarkOutline className="text-lg opacity-80" /> Favorites</Link></li>
                                    {session.user.role === 'admin' && (
                                        <li><Link href="/allblog" className="px-3 py-2"><IoPeopleOutline className="text-lg opacity-80" /> All Blogs</Link></li>
                                    )}
                                </>
                            )}
                            <div className="divider my-0"></div>
                            {session ? (
                                <li>
                                    <form action={async () => {
                                        "use server";
                                        revalidatePath("/", "layout");
                                        await signOut({ redirectTo: "/login" })
                                    }} className="w-full flex p-0">
                                        <button type="submit" className="flex items-center gap-2 text-red-600 w-full hover:bg-red-50/50 px-3 py-2 rounded-lg transition-colors text-left">
                                            <IoLogOutOutline className="text-lg opacity-80" /> Sign Out
                                        </button>
                                    </form>
                                </li>
                            ) : (
                                <li><Link href="/login" className="text-indigo-600 px-3 py-2"><IoLogOutOutline className="text-lg opacity-80" /> Sign In</Link></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
