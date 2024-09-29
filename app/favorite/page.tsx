import FavoriteBlog from "@/components/favorite-blog"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'My Favorite',
}

const FavoritePage = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="max-w-screen-xl mx-auto py-10 px-5">
                <h1 className="text-2xl font-bold">Favorite List</h1>
                <FavoriteBlog />
            </div>
        </div>
    )
}

export default FavoritePage
