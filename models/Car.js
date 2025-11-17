const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    category: { type: String },
    features: [{ type: String }],
    isAvailable: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Car", carSchema, "allCars");
