import { useState, useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePost = ({ isOpen, setIsOpen }) => {
    const { setPosts } = useContext(PostsContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setTitle("");
        setContent("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title.trim().length < 3) {
            return toast.error("Title must be at least 3 characters.", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                theme: "colored",
                className: "custom-toast-error"
            });
        }
        if (title.trim().length > 50) {
            return toast.error("Title cannot exceed 50 characters.", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                theme: "colored",
                className: "custom-toast-error"
            });
        }
        if (content.trim().length < 10) {
            return toast.error("Content must be at least 10 characters.", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                theme: "colored",
                className: "custom-toast-error"
            });
        }
        if (content.trim().length > 2000) {
            return toast.error("Content cannot exceed 2000 characters.", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                theme: "colored",
                className: "custom-toast-error"
            });
        }

        setLoading(true);

        try {
            const res = await fetch("/api/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, content }),
            });

            if (!res.ok) throw new Error("Failed to create post");

            const newPost = await res.json();
            { /* Commented out due to backend testing */ }
            // setPosts((prev) => [newPost, ...prev]);

            toast.success("Success! Redirecting...", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                theme: "colored",
                className: "custom-toast-success"
            });
            resetForm();
            setIsOpen(false);
            setTimeout(() => {
                window.location.href = `/posts/${newPost.id}`;
            }, 1500);
        } catch (err) {
            console.error(err);
            toast.error("Could not create post, please try again later.", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                theme: "colored",
                className: "custom-toast-error"
            });
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal modal-open fixed z-999 flex items-center justify-center bg-grey/50 backdrop-blur-xs">
            <div className="modal-box relative max-w-2xl bg-[var(--chalk-white)] rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Create a Post</h3>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        className="input input-bordered w-full"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Content"
                        className="textarea textarea-bordered w-full"
                        rows={6}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    >
                    </textarea>
                    <div className="modal-action justify-end">
                        <button
                            type="button"
                            className="btn btn-ghost"
                            onClick={() => {
                                setIsOpen(false);
                                resetForm();
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`btn btn-primary ${loading ? "loading" : ""}`}
                            disabled={loading}
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
