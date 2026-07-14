"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react'
import dynamic from "next/dynamic";

const CustomEditor = dynamic(() => import("@/components/custom-editor"), {
    ssr: false,
    loading: () => <div className="h-[200px] w-full bg-slate-50 animate-pulse rounded-xl border border-slate-200 flex items-center justify-center text-xs text-slate-400">Loading editor...</div>
});
import { IoCreateOutline } from 'react-icons/io5';

type Blog = {
    id: string;
    title: string;
    content: string;
};

const UpdateBlog = ({ blog }: {blog: Blog}) => {
    const [title, setTitle] = useState(blog.title);
    const [content, setContent] = useState(blog.content);
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.patch(`/api/blog/${blog.id}`, {
            title: title,
            content: content,
        });
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <button 
                className="border border-amber-200 bg-amber-50 hover:bg-amber-100/80 text-amber-700 hover:text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer" 
                onClick={handleModal}
            >
                Edit
            </button>
            
            <div className={isOpen ? `modal modal-open backdrop-blur-sm bg-slate-900/40` : `modal`}>
                <div className="modal-box w-full h-[100dvh] max-h-[100dvh] sm:h-auto sm:max-h-[calc(100vh-5em)] max-w-screen-md bg-white border border-slate-100 rounded-none sm:rounded-3xl p-4 sm:p-8 shadow-2xl relative whitespace-normal flex flex-col overflow-hidden">
                    <div className="flex items-start gap-3 mb-4 sm:mb-6 shrink-0">
                        <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                            <IoCreateOutline className="text-xl" />
                        </div>
                        <div>
                            <h3 className="font-extrabold text-slate-800 text-lg">Perbarui Cerita</h3>
                            <p className="text-xs text-slate-500 mt-0.5">Edit konten cerita Anda yang tersimpan di bawah.</p>
                        </div>
                    </div>

                    <form onSubmit={handleUpdate} className="flex flex-col flex-1 overflow-hidden min-h-0">
                        <div className="form-control w-full shrink-0 mb-4">
                            <label className="block mb-1.5 text-xs font-semibold text-slate-500">Judul Cerita</label>
                            <input 
                                type="text" 
                                className="bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-slate-800 rounded-xl w-full px-4 py-2.5 focus:outline-none transition-all duration-200 placeholder-slate-400/80 text-sm shadow-inner" 
                                placeholder="Blog Title" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="form-control w-full flex-1 flex flex-col min-h-0 overflow-hidden">
                            <label className="block mb-1.5 text-xs font-semibold text-slate-500 shrink-0">Konten Cerita</label>
                            <div className="mt-1 flex-1 overflow-hidden ck-editor-fullscreen">
                                <CustomEditor
                                    value={content}
                                    onChange={setContent}
                                />
                            </div>
                        </div>
                        <div className="modal-action shrink-0 flex justify-end gap-3 pt-4 mt-2">
                            <button 
                                type="button" 
                                className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-xs font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 active:scale-[0.98]" 
                                onClick={handleModal}
                            >
                                Batal
                            </button>
                            <button 
                                type="submit" 
                                className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-md shadow-amber-100"
                            >
                                Simpan Perubahan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateBlog
