const { randomUUID } = require("crypto");

class Post {
    constructor(title, content) {
        this.id = randomUUID();
        this.title = title;
        this.content = content;
        this.excerpt = this.generateExcerpt();
        this.author = "John Doe";
        this.date = new Date().toISOString().split("T")[0];
    }

    generateExcerpt() {
        return this.content.length > 250 ? this.content.substring(0, 250) + "..." : this.content;
    }
}

module.exports = Post;
