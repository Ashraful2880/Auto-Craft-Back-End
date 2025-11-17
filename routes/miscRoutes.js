const express = require("express");
const router = express.Router();
const { getAllTestimonials, getAllBranches, addServiceRequest, getAllServiceRequests, addRating } = require("../controllers/miscController");

// Get All Testimonials
router.get("/testimonials", getAllTestimonials);

// Get All Branches
router.get("/branches", getAllBranches);

// Post Service Request
router.post("/service", addServiceRequest);

// Get All Service Requests
router.get("/service", getAllServiceRequests);

// Post A Rating By User
router.post("/addRating", addRating);

module.exports = router;