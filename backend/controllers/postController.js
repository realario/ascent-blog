const Post = require("../models/Post");

let posts = [
    new Post(
        "First V4: How I Conquered My First Hard Route",
        "Climbing my first V4 was a mix of fear, excitement, and sweat. Breaking it down into smaller sequences and focusing on foot placement made it manageable. Persistence and practice paid off, and I finally sent the route after a few tries. Here's everything I learned along the way."
    ),

    new Post(
        "Top 5 Beginner Climbing Shoes",
        "Choosing the right climbing shoes can make a big difference. I’ve tested several beginner-friendly options and found the best balance of comfort, grip, and affordability. In this post, I break down my top five picks, why I like each one, and tips on sizing."
    ),

    new Post(
        "Indoor vs Outdoor Bouldering: What's the Difference?",
        "Indoor gyms provide a controlled environment and consistent training routes, while outdoor bouldering offers adventure, real rock textures, and unique problem-solving. I discuss the pros and cons of each, how to prepare, and tips for transitioning from indoor walls to natural rock."
    ),
];

const getAllPosts = (req, res) => {
    res.json(posts);
};

const getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((p) => p.id === id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
};

module.exports = {
    getAllPosts,
    getPostById,
};
