"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
            <button className="btn btn-success btn-sm" disabled={blog.status === 'approved'} onClick={handleModal}>Approved</button>
            <div className={isOpen ? `modal modal-open` : `modal`}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are sure to approve this blog {blog.title}?</h3>
                    <div className="modal-action">
                        <button type="button" className="btn btn-sm btn-neutral" onClick={handleModal}>No</button>
                        <button onClick={() => handleUpdate(blog.id)} type="button" className="btn btn-info btn-sm">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovedButton
