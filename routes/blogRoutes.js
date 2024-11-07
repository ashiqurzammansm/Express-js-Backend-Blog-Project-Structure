const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Create Blog
router.post('/create-blog', blogController.createBlog);

// Read Blogs
router.get('/read-blog', blogController.readBlog);

// Update Blog
router.put('/update-blog', blogController.updateBlog);

// Delete Blog
router.delete('/delete-blog', blogController.deleteBlog);

module.exports = router;
