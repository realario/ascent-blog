const express = require("express");
const { getAllPosts, getPostById, deletePost, createPost } = require("../controllers/postController");
const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.delete("/:id", deletePost);
router.post("/", createPost);

module.exports = router;
