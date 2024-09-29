"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
            <button className="btn btn-warning btn-sm" onClick={handleModal}>Edit</button>
            <div className={isOpen ? `modal modal-open` : `modal`}>
                <div className="modal-box max-w-screen-md">
                    <h3 className="font-bold text-lg">Update {blog.title}</h3>
                    <form onSubmit={handleUpdate}>
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

export default UpdateBlog
