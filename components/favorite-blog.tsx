import { getLikes } from "@/lib/data"

const FavoriteBlog = async () => {
    const likes = await getLikes();
    return (
        <div className="flex flex-wrap">
            {likes?.map((like) => (
                <>
                    <div className="card m-4 bg-base-100 w-96 shadow-xl" key={like.id}>
                        <div className="card-body">
                            <h2 className="card-title">{like.blog?.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: like.blog?.content ?? '' }} />
                            <p>Created By: {like.user?.name}</p>
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default FavoriteBlog
