"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { IoChevronDownOutline, IoTimeOutline, IoCalendarOutline, IoCloseOutline } from "react-icons/io5";
import LikeButton from "./like-button";

type BlogItemProps = {
    blog: {
        id: string;
        title: string;
        content: string;
        createdAt: Date;
        user: {
            name: string | null;
            image: string | null;
        } | null;
    };
};

const BlogCardItem = ({ blog }: BlogItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Strips HTML and returns truncated text
    const getExcerpt = (html: string, limit = 160) => {
        const temp = html.replace(/<[^>]*>/g, " ");
        const clean = temp.replace(/\s+/g, " ").trim();
        if (clean.length <= limit) return clean;
        return clean.substring(0, limit) + "...";
    };

    // Calculate reading time
    const getReadingTime = (html: string) => {
        const words = html.replace(/<[^>]*>/g, "").trim().split(/\s+/).length;
        const minutes = Math.ceil(words / 200);
        return `${minutes} min read`;
    };

    // Format date elegantly
    const formatDate = (dateInput: Date) => {
        const date = new Date(dateInput);
        return date.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    const excerpt = getExcerpt(blog.content);
    const readingTime = getReadingTime(blog.content);
    const hasMore = blog.content.replace(/<[^>]*>/g, "").trim().length > 160;

    const modalContent = isOpen ? (
        <div className="modal modal-open backdrop-blur-sm bg-slate-900/40 z-50">
            <div className="modal-box max-w-screen-md bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-left whitespace-normal flex flex-col max-h-[85vh] overflow-hidden">
                {/* Top Close Icon Button */}
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-colors"
                >
                    <IoCloseOutline className="text-xl" />
                </button>

                {/* Modal Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-6 mt-2">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-100">
                            <Image 
                                src={blog.user?.image || "/gw.png"} 
                                alt={blog.user?.name || "avatar"} 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <span className="font-bold text-sm text-slate-800 block capitalize">{blog.user?.name || "Penulis Anonim"}</span>
                            <span className="text-[11px] text-slate-400 block flex items-center gap-1 mt-0.5">
                                <IoCalendarOutline className="text-xs" />
                                {formatDate(blog.createdAt)}
                            </span>
                        </div>
                    </div>

                    <span className="self-start sm:self-center inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50/50 px-3 py-1.5 rounded-full border border-indigo-100/40">
                        <IoTimeOutline />
                        {readingTime}
                    </span>
                </div>

                {/* Scrollable Content Box */}
                <div className="overflow-y-auto pr-2 space-y-4 flex-grow scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                    <h2 className="font-extrabold text-2xl text-slate-900 leading-tight">
                        {blog.title}
                    </h2>
                    <div 
                        className="prose prose-sm max-w-none prose-slate text-slate-700 leading-relaxed break-words mt-4"
                        dangerouslySetInnerHTML={{ __html: blog.content }} 
                    />
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-6">
                    <div className="flex items-center bg-slate-50 border border-slate-100 rounded-xl px-2 py-0.5 shadow-sm">
                        <LikeButton blog={blog} />
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-xs font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 active:scale-[0.98]"
                    >
                        Tutup Bacaan
                    </button>
                </div>
            </div>
        </div>
    ) : null;

    return (
        <article className="group bg-white/70 backdrop-blur-md border border-white/60 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between h-full relative">
            <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-100">
                            <Image 
                                src={blog.user?.image || "/gw.png"} 
                                alt={blog.user?.name || "avatar"} 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <span className="font-semibold text-xs text-slate-700 block capitalize">{blog.user?.name || "Penulis Anonim"}</span>
                            <span className="text-[10px] text-slate-400 block flex items-center gap-1">
                                <IoCalendarOutline className="text-xs" />
                                {formatDate(blog.createdAt)}
                            </span>
                        </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-indigo-600 bg-indigo-50/50 px-2.5 py-1 rounded-full border border-indigo-100/40">
                        <IoTimeOutline />
                        {readingTime}
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2 leading-snug">
                    {blog.title}
                </h3>

                {/* Content Area */}
                <div className="text-sm text-slate-600 leading-relaxed mb-4">
                    <p className="line-clamp-3">{excerpt}</p>
                </div>
            </div>

            {/* Footer Action Area */}
            <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100/80">
                {hasMore ? (
                    <button 
                        onClick={() => setIsOpen(true)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors py-1.5 px-3 rounded-lg hover:bg-indigo-50/50"
                    >
                        <span>Baca Selengkapnya</span>
                        <IoChevronDownOutline className="text-sm" />
                    </button>
                ) : (
                    <div className="w-1" />
                )}

                <div className="flex items-center bg-slate-50 border border-slate-100 rounded-xl px-2 py-0.5 shadow-sm">
                    <LikeButton blog={blog} />
                </div>
            </div>

            {/* Render portal for modal to break stacking context issues */}
            {mounted && typeof document !== "undefined" && createPortal(modalContent, document.body)}
        </article>
    );
};

export default BlogCardItem;
