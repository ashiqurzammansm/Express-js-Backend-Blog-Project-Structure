const Blog = require('../models/blogModel');

// Create Blog
exports.createBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const blog = new Blog({ title, content, author });
        await blog.save();
        res.status(201).json({ message: 'Blog created successfully', blog });
    } catch (error) {
        res.status(500).json({ message: 'Error creating blog', error: error.message });
    }
};

// Read Blogs
exports.readBlog = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Error reading blogs', error: error.message });
    }
};

// Update Blog
exports.updateBlog = async (req, res) => {
    try {
        const { id, title, content, author } = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { title, content, author },
            { new: true }
        );
        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog updated successfully', updatedBlog });
    } catch (error) {
        res.status(500).json({ message: 'Error updating blog', error: error.message });
    }
};

// Delete Blog
exports.deleteBlog = async (req, res) => {
    try {
        const { id } = req.body;
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting blog', error: error.message });
    }
};
