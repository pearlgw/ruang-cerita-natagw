/* eslint-disable @next/next/no-async-client-component */
'use client'
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoHeart, IoHeartOutline, IoAlertCircleOutline } from 'react-icons/io5';
import axios from "axios";
import { useRouter } from "next/navigation";

type Blog = {
    id: string;
};

const LikeButton = ({ blog }: { blog: Blog }) => {
    const [isLiked, setIsLiked] = useState(false); // State untuk mengetahui apakah sudah di-like
    const [showToast, setShowToast] = useState(false);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
        // Fetch status like dari API (misalnya)
        const fetchLikeStatus = async () => {
            try {
                const response = await axios.get(`/api/blog/${blog.id}/favoritestatus`);
                setIsLiked(response.data.isLiked); // Sesuaikan berdasarkan response API
            } catch {
                // Fail silently if not logged in
            }
        };

        fetchLikeStatus();
        return () => setMounted(false);
    }, [blog.id]);

    const toggleLike = async () => {
        try {
            if (isLiked) {
                // Kalau sudah di-like, maka hapus like (dislike)
                await axios.delete(`/api/like/${blog.id}`);
            } else {
                // Kalau belum di-like, tambahkan like
                await axios.post(`/api/blog/${blog.id}/favorite`, { blogId: blog.id });
            }

            setIsLiked(!isLiked); // Toggle status isLiked
            router.refresh(); // Refresh halaman setelah aksi
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                setShowToast(true);
                // Auto dismiss toast after 3 seconds
                setTimeout(() => {
                    setShowToast(false);
                }, 3000);
            }
        }
    };

    const toastMarkup = showToast ? (
        <div className="fixed top-20 right-6 z-[9999] animate-slide-in-right">
            <div className="flex items-center gap-3 bg-white border border-rose-100 shadow-xl shadow-rose-200/40 px-4 py-3.5 rounded-2xl max-w-sm">
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 shadow-inner">
                    <IoAlertCircleOutline className="text-xl" />
                </div>
                <div>
                    <p className="font-bold text-xs text-slate-800">Gagal Menyukai</p>
                    <p className="text-[10px] text-slate-500 mt-0.5 font-medium">Anda belum login</p>
                </div>
            </div>
        </div>
    ) : null;

    return (
        <>
            <button className="btn-sm flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-150" onClick={toggleLike}>
                {isLiked ? (
                    <IoHeart className="text-red-500" size={24} />
                ) : (
                    <IoHeartOutline className="text-red-500" size={24} />
                )}
            </button>
            {mounted && typeof document !== "undefined" && createPortal(toastMarkup, document.body)}
        </>
    );
}

export default LikeButton;
