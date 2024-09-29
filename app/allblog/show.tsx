"use client"

import { useState } from "react";

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
            <button className="btn btn-info btn-sm" onClick={handleModal}>Show</button>
            <div className={isOpen ? `modal modal-open` : `modal`}>
                <div className="modal-box max-w-screen-md">
                    <h3 className="font-bold text-lg text-center mb-2">Detail Blog</h3>
                    <div className="form-control w-full">
                        <label className="label font-bold">Title</label>
                        <p>{blog.title}</p>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Content</label>
                        <div
                            dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>
                    <div className="modal-action">
                        <button type="button" className="btn btn-sm btn-outline btn-ghost" onClick={handleModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowButton
