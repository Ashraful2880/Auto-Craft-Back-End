const mongoose = require("mongoose");

const serviceRequestSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
    serviceType: { type: String, required: true },
    description: { type: String, required: true },
    preferredDate: { type: Date },
    status: { type: String, enum: ['Pending', 'Approved', 'Completed', 'Cancelled'], default: 'Pending' },
    branchId: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ServiceRequest", serviceRequestSchema, "allServiceRequest");