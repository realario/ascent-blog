class Post {
    constructor(title, content, author) {
        this.id = Date.now();
        this.title = title;
        this.content = content;
        this.excerpt = this.generateExcerpt();
        this.author = author;
        this.date = new Date().toISOString().split("T")[0];
    }

    generateExcerpt() {
        return this.content.length > 100 ? this.content.substring(0, 100) + "..." : this.content;
    }
}

module.exports = Post;
