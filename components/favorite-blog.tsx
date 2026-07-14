import { getLikes } from "@/lib/data"
import { IoHeart } from "react-icons/io5";
import FavoriteCardItem from "./favorite-card-item";

const FavoriteBlog = async () => {
    const likes = await getLikes();

    if (!likes?.length) {
        return (
            <div className="flex flex-col items-center justify-center text-center p-12 bg-white/50 backdrop-blur-md border border-white/60 rounded-3xl max-w-md mx-auto shadow-sm">
                <IoHeart className="text-rose-400 text-5xl mb-4 animate-pulse" />
                <h3 className="font-bold text-slate-800 text-lg">Belum Ada Favorit</h3>
                <p className="text-slate-500 text-sm mt-1 max-w-xs leading-relaxed">
                    Jelajahi halaman utama dan sukai cerita favorit Anda untuk menyimpannya di sini!
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {likes.map((like) => (
                <FavoriteCardItem key={like.id} like={like} />
            ))}
        </div>
    )
}

export default FavoriteBlog;
