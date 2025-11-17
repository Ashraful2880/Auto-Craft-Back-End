const express=require('express');
const {
     getAllBlogs,
     getBlogById 
}  = require('../controllers/blogController');

const router=express.Router();

// Match old project endpoints exactly
router.get('/blogs',getAllBlogs); // Get All Blogs 
router.get('/blog/:id',getBlogById); // Get Blog By ID 

module.exports=router;
