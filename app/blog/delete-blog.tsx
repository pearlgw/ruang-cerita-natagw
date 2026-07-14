"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoWarningOutline } from "react-icons/io5";

type Blog = {
    id: string;
    title: string;
    content: string;
};

const DeleteBlog = ({ blog }: { blog: Blog }) => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleDelete = async (blogId: string) => {
        await axios.delete(`/api/blog/${blogId}`);
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <button 
                className="border border-rose-200 bg-rose-50 hover:bg-rose-100/80 text-rose-700 hover:text-rose-800 text-xs font-semibold px-3 py-1.5 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer" 
                onClick={handleModal}
            >
                Delete
            </button>
            <div className={isOpen ? `modal modal-open backdrop-blur-sm bg-slate-900/40` : `modal`}>
                <div className="modal-box max-w-sm bg-white border border-slate-100 rounded-3xl p-6 shadow-2xl relative text-center whitespace-normal">
                    <div className="mx-auto w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mb-4">
                        <IoWarningOutline className="text-2xl" />
                    </div>
                    <h3 className="font-extrabold text-slate-800 text-lg">Hapus Cerita?</h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        Apakah Anda yakin ingin menghapus cerita <span className="font-semibold text-slate-700">&quot;{blog.title}&quot;</span>? Tindakan ini tidak dapat dibatalkan.
                    </p>
                    <div className="flex gap-3 justify-center mt-6">
                        <button 
                            type="button" 
                            className="flex-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-xs font-semibold py-2.5 rounded-xl transition-all duration-200 active:scale-[0.98]" 
                            onClick={handleModal}
                        >
                            Batal
                        </button>
                        <button 
                            onClick={() => handleDelete(blog.id)} 
                            type="button" 
                            className="flex-1 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-md shadow-rose-100"
                        >
                            Ya, Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteBlog
