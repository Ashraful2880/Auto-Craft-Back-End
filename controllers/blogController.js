const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    console.log(blogs);
    return res.status(200).json(blogs);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    let id = req.params.id;
    const blog = await Blog.findById(id);
    return res.status(200).json(blog);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
