const express= require('express');
const {
     saveUser,
     updateUser,
     getUsers,
     updateAdminRole,
     checkAdminStatus 
} = require('../controllers/userController');

const router= express.Router();

// Match old project endpoints exactly
router.post('/users', saveUser); // Save User Info 
router.put('/users', updateUser); // Update User Info 
router.get('/users', getUsers); // Get All Users 
router.put('/users/admin', updateAdminRole); // Update Admin Role 
router.get('/user/:email', checkAdminStatus); // Get Admin Status 

module.exports= router;
