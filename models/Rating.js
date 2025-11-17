const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: true },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Rating", ratingSchema, "userRatings");