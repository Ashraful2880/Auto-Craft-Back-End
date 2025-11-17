const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // Optional if using OAuth or other auth methods.
    role: { type: String, enum: ["user", "Admin"], default: "user" },
    phone: { type: String },
    address: { type: String },
    profileImage: { type: String },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema, "users");
