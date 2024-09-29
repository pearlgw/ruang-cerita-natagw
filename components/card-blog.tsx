import { getAllBlogs } from "@/lib/data"
import LikeButton from "./like-button";

/* eslint-disable @next/next/no-img-element */
const CardBlog = async () => {
    const allblogs = await getAllBlogs();
    return (
        <div className="flex flex-wrap">
            {allblogs?.map((allblog) => (
                <>
                    {allblog.status === 'approved' && (
                        <div className="card m-4 bg-base-100 w-96 shadow-xl" key={allblog.id}>
                            <div className="card-body">
                                <h2 className="card-title">{allblog.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: allblog.content }} />
                                <p>Created By: {allblog.user?.name}</p>
                                <div className="card-actions justify-end">
                                    <LikeButton blog={allblog}/>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ))}
        </div>
    )
}

export default CardBlog
