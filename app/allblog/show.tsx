"use client"

import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

type Blog = {
    id: string;
    title: string;
    content: string;
};

const ShowButton = ({ blog }: { blog: Blog }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <button 
                className="border border-indigo-200 bg-indigo-50 hover:bg-indigo-100/80 text-indigo-700 hover:text-indigo-800 text-xs font-semibold px-3 py-1.5 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer" 
                onClick={handleModal}
            >
                Show
            </button>
            <div className={isOpen ? `modal modal-open backdrop-blur-sm bg-slate-900/40` : `modal`}>
                <div className="modal-box w-full h-[100dvh] max-h-[100dvh] sm:h-auto sm:max-h-[calc(100vh-5em)] max-w-screen-md bg-white border border-slate-100 rounded-none sm:rounded-3xl p-4 sm:p-8 shadow-2xl relative text-left whitespace-normal flex flex-col overflow-hidden">
                    <div className="flex items-start gap-3 mb-4 sm:mb-6 shrink-0 border-b border-slate-100 pb-4">
                        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                            <IoEyeOutline className="text-xl" />
                        </div>
                        <div>
                            <h3 className="font-extrabold text-slate-800 text-lg">Pratinjau Cerita</h3>
                            <p className="text-xs text-slate-500 mt-0.5">Detail isi tulisan cerita kontributor.</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col flex-1 overflow-hidden min-h-0">
                        <div className="shrink-0 mb-4">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Judul Cerita</span>
                            <h2 className="text-xl font-bold text-slate-800 mt-1">{blog.title}</h2>
                        </div>
                        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">Isi Cerita</span>
                            <div 
                                className="prose prose-sm prose-slate max-w-none mt-2 bg-slate-50/50 border border-slate-200/50 rounded-xl p-4 sm:p-5 text-slate-700 leading-relaxed overflow-y-auto flex-1"
                                dangerouslySetInnerHTML={{ __html: blog.content }} 
                            />
                        </div>
                    </div>

                    <div className="modal-action shrink-0 flex justify-end pt-4 border-t border-slate-100 mt-4">
                        <button 
                            type="button" 
                            className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-xs font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-sm" 
                            onClick={handleModal}
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowButton
