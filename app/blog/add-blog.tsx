"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post("/api/blog", {
            title: title,
            content: content,
        });

        setTitle("");
        setContent("");
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className="py-2 px-4 bg-blue-600 rounded-md text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 text-sm" onClick={handleModal}>Add New</button>
            <div className={isOpen ? `modal modal-open` : `modal`}>
                <div className="modal-box max-w-screen-md">
                    <h3 className="font-bold text-lg">Add New Blog</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full">
                            <label className="label font-bold">Title</label>
                            <input type="text" className="input input-bordered" placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Content</label>
                            <CKEditor
                                editor={ClassicEditor}
                                data={content}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setContent(data);
                                }}
                            />
                        </div>
                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleModal}>Close</button>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBlog
