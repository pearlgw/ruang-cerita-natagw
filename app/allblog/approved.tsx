"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

type Blog = {
    id: string;
    title: string;
    content: string;
    status: string;
};
const ApprovedButton = ({ blog }: { blog: Blog }) => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleUpdate = async (blogId: string) => {
        await axios.patch(`/api/blog/${blogId}/approved`);
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <button 
                className="border border-emerald-200 disabled:opacity-40 disabled:hover:bg-emerald-50/50 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 hover:text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer" 
                disabled={blog.status === 'approved'} 
                onClick={handleModal}
            >
                Approve
            </button>
            <div className={isOpen ? `modal modal-open backdrop-blur-sm bg-slate-900/40` : `modal`}>
                <div className="modal-box max-w-sm bg-white border border-slate-100 rounded-3xl p-6 shadow-2xl relative text-center whitespace-normal">
                    <div className="mx-auto w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                        <IoCheckmarkCircleOutline className="text-2xl" />
                    </div>
                    <h3 className="font-extrabold text-slate-800 text-lg">Setujui Cerita?</h3>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        Apakah Anda yakin ingin menyetujui cerita <span className="font-semibold text-slate-700">&quot;{blog.title}&quot;</span>? Cerita akan langsung tayang di beranda utama.
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
                            onClick={() => handleUpdate(blog.id)} 
                            type="button" 
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-md shadow-emerald-100"
                        >
                            Ya, Setujui
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovedButton
