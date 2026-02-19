import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../customToastStyles.css"

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/posts");
                // console.log(res);
                if (!res.ok) throw new Error("Failed to fetch posts");
                const data = await res.json();
                setPosts(data);
            } catch (err) {
                console.error("Failed to fetch posts:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const deletePost = useCallback(async (id) => {
        try {
            const res = await fetch(`/api/posts/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => null);
                throw new Error(
                    errorData?.message || "Failed to delete post"
                );
            }

            setPosts((prevPosts) =>
                prevPosts.filter((post) => post.id !== id)
            );

            toast.dismiss();
            toast("Post removed.", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                theme: "colored",
                className: "custom-toast-neutral"
            });
        } catch (err) {
            console.error("Deletion error:", err);
        }
    }, [setPosts]);

    const value = useMemo(() => ({ posts, setPosts, deletePost, loading }), [posts, deletePost, loading]);

    return (
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    );
};
