import { auth } from "@/auth"
import CardBlog from "@/components/card-blog";
// import CardBlog from "@/components/card-blog";

const Dashboard = async () => {
    const session = await auth();
    return (
        <div className="max-w-screen-xl mx-auto py-6 px-4">
            <div>
                <h1 className="text-2xl">Dashboard</h1>
                <h2 className="text-xl">Welcome <span className="font-bold">{session?.user?.name}</span></h2>
            </div>
            <CardBlog />
        </div>
    )
}

export default Dashboard
