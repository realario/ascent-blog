import dayjs from "dayjs";
import { IoMdTrash } from "react-icons/io";
import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import { useNavigate } from "react-router";

const PostCard = ({ post, index }) => {
    const { deletePost } = useContext(PostsContext);

    const images = [
        "src/assets/hard-route.jpg",
        "src/assets/climbing-shoes.jpg",
        "src/assets/outdoor-bouldering.jpg",
    ];

    const imageSrc = images[index % images.length];

    const navigate = useNavigate();

    return (
        <div
            className="card card-side bg-white shadow-md rounded-xl transition-all duration-300 hover:-translate-y-0.25
                        hover:shadow-lg cursor-pointer"
            onClick={() => navigate(`/posts/${post.id}`)}
        >
            {/* Cover Image */}
            <figure className="max-w-70 h-auto">
                <img src={imageSrc} className="w-full h-full object-cover" />
            </figure>
            {/* Body */}
            <div className="card-body">
                {/* Container that displays content and delete button side by side */}
                <div className="flex justify-between">
                    {/* Content */}
                    <div className="flex flex-col gap-2 p-1">
                        <p className="text-primary brightness-110">
                            {post.author} &bull; {dayjs(post.date).format("D MMM, YYYY")}
                        </p>
                        <h3 className="font-[700] text-[26px]">{post.title}</h3>
                        <div className="text-[16px] text-base-content/85">{post.excerpt}</div>
                    </div>
                    {/* Delete Button */}
                    <div>
                        <IoMdTrash
                            onClick={(e) => {
                                e.stopPropagation();
                                if (confirm("Are you sure you want to delete this post?")) {
                                    deletePost(post.id);
                                }
                            }}
                            className="
                                w-7
                                h-7
                                transition-colors
                                duration-200
                                text-[var(--slate-grey)]/30
                                hover:text-[var(--safety-red)]
                            "
                            cursor="pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
