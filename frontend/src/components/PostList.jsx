import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import PostCard from "./PostCard";

const PostList = () => {
    const { posts, loading } = useContext(PostsContext);

    return (
        <>
            <h1 className="text-primary font-[800] text-[40px] leading-[15px]">Latest Posts</h1>
            <div className="divider py-6"></div>
            <div className="space-y-6">
                {loading ? (
                    <div className="flex items-center justify-center py-48">
                        <span className="loading loading-bars loading-xl text-primary"></span>
                    </div>
                ) : posts.length > 0 ? (
                    posts.map((post, index) => (
                        <PostCard key={post.id} post={post} index={index} />
                    ))
                ) : (
                    <p>There are no posts yet. Check back soon for updates!</p>
                )}
            </div>
        </>
    );
};

export default PostList;
