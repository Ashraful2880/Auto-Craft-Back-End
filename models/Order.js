const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    id: { type: String, unique: true },
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
    carIds: [{ type: String }], // For multiple car orders
    carName: { type: String },
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String },
    status: { type: String, enum: ["Pending", "Approve", "Delivered", "Cancelled"], default: "Pending" },
    orderDate: { type: Date, default: Date.now },
    deliveryDate: { type: Date },
    notes: { type: String },
});

module.exports = mongoose.model("Order", orderSchema, "allOrders");
