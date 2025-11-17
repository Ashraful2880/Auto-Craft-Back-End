const Rating = require("../models/Rating");
const Branch = require("../models/Branch");
const ServiceRequest = require("../models/ServiceRequest");

// Get All Testimonials - /testimonials endpoint
exports.getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Rating.find({});
        res.send(testimonials);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get All Branches - /branches endpoint
exports.getAllBranches = async (req, res) => {
    try {
        const branches = await Branch.find({});
        res.send(branches);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Post Service Request - /service endpoint
exports.addServiceRequest = async (req, res) => {
    try {
        const serviceData = req.body;
        const service = new ServiceRequest(serviceData);
        const result = await service.save();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get All Service Requests - /service endpoint
exports.getAllServiceRequests = async (req, res) => {
    try {
        const services = await ServiceRequest.find({});
        res.json(services);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Post A Rating By User - /addRating endpoint
exports.addRating = async (req, res) => {
    try {
        const ratingData = req.body;
        const rating = new Rating(ratingData);
        const result = await rating.save();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};