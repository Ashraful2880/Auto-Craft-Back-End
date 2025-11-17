const User = require('../models/User');
const {ObjectId}=require('mongodb');

exports.saveUser=async(req,res)=>{
    try {
        const newUser=req.body;
        const user = new User(newUser);
        const result = await user.save();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.updateUser=async(req,res)=>{
    try {
        const updatedUser=req.body;
        const filter={email:updatedUser.email};
        const options={upsert:true};
        const result=await User.updateOne(filter,{ $set: updatedUser }, options);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getUsers=async(req,res)=>{
    try {
        const usersList=await User.find({});
        res.json(usersList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.updateAdminRole=async(req,res)=>{
    try {
        const user=req.body;
        const filter={email:user.email};
        const updateAdmin={$set:{role:'Admin'}};
        await User.updateOne(filter,updateAdmin);
        res.json({message:'Role Updated to Admin'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.checkAdminStatus=async(req,res)=>{
    try {
        let isAdmin=false; 
        const email=req.params.email; 
        const query={email:email}; 
        const adminData=await User.findOne(query); 
        if(adminData?.role==='Admin'){
            isAdmin=true; 
        }
        res.json({admin:isAdmin}); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
