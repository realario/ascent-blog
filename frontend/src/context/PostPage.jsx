import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../context/PostsContext";
import dayjs from "dayjs";

const PostPage = () => {
    const { id } = useParams();
    const { posts } = useContext(PostsContext);

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Try to find via context first
        const foundPost = posts.find((p) => p.id === id);
        if (foundPost) {
            setPost(foundPost);
            setLoading(false);
        } else {
            // Fallback - fetches from backend
            const fetchPost = async () => {
                try {
                    const res = await fetch(`/api/posts/${id}`);
                    if (!res.ok) throw new Error("Post not found");
                    const data = await res.json();
                    setPost(data);
                } catch (err) {
                    console.error(err);
                    setPost(null);
                } finally {
                    setLoading(false);
                }
            };
            fetchPost();
        }
    }, [id, posts]);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-48">
                <span className="loading loading-bars loading-xl text-primary"></span>
            </div>
        );
    }

    if (!post) return <p className="text-[var(--safety-red)]">Post not found.</p>;

    return (
        <div className="max-w-4xl mx-auto py-12 px-6">
            <h1 className="font-[700] text-4xl mb-4">{post.title}</h1>
            <p className="text-primary mb-6 font-[600]">
                By {post.author} on {dayjs(post.date).format("D MMM, YYYY")}
            </p>
            <div className="text-[18px] leading-relaxed">{post.content}</div>
        </div>
    );
};

export default PostPage;
