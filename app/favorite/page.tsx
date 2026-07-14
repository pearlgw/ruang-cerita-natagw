import FavoriteBlog from "@/components/favorite-blog"
import { Metadata } from "next"
import { IoBookmarkOutline } from "react-icons/io5"

export const metadata: Metadata = {
    title: 'My Favorite - Ruang Cerita',
}

const FavoritePage = () => {
    return (
        <div className="max-w-screen-xl w-full mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="border-b border-slate-200/60 pb-5">
                <h1 className="text-2xl font-extrabold text-slate-800 flex items-center gap-2">
                    <IoBookmarkOutline className="text-indigo-600" />
                    <span>Cerita Favorit Saya</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Koleksi karya tulisan menarik yang telah Anda simpan dan sukai.
                </p>
            </div>
            <FavoriteBlog />
        </div>
    )
}

export default FavoritePage
