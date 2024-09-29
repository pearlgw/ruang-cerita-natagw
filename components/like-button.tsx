/* eslint-disable @next/next/no-async-client-component */
'use client'
import { useState, useEffect } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import axios from "axios";
import { useRouter } from "next/navigation";

type Blog = {
    id: string;
};

const LikeButton = ({ blog }: { blog: Blog }) => {
    const [isLiked, setIsLiked] = useState(false); // State untuk mengetahui apakah sudah di-like
    const router = useRouter();

    useEffect(() => {
        // Fetch status like dari API (misalnya)
        const fetchLikeStatus = async () => {
            const response = await axios.get(`/api/blog/${blog.id}/favoritestatus`);
            setIsLiked(response.data.isLiked); // Sesuaikan berdasarkan response API
        };

        fetchLikeStatus();
    }, [blog.id]);

    const toggleLike = async () => {
        if (isLiked) {
            // Kalau sudah di-like, maka hapus like (dislike)
            await axios.delete(`/api/like/${blog.id}`);
        } else {
            // Kalau belum di-like, tambahkan like
            await axios.post(`/api/blog/${blog.id}/favorite`, { blogId: blog.id });
        }

        setIsLiked(!isLiked); // Toggle status isLiked
        router.refresh(); // Refresh halaman setelah aksi
    };

    return (
        <button className="btn-sm" onClick={toggleLike}>
            {isLiked ? (
                <IoHeart className="text-red-500" size={24} />
            ) : (
                <IoHeartOutline className="text-red-500" size={24} />
            )}
        </button>
    );
}

export default LikeButton;
