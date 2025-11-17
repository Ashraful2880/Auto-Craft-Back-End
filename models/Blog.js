const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    image: { type: String },
    category: { type: String },
    tags: [{ type: String }],
    isPublished: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", blogSchema, "blogs");
