const Car = require("../models/Car");
const { ObjectId } = require("mongodb");

// Get All Cars - /allCars endpoint
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find({});
        res.send(cars);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get Cars With Pagination - /cars endpoint
exports.getCarsWithPagination = async (req, res) => {
    try {
        const limit = 6;
        const page = parseInt(req.query.page) || 1;
        const startIndex = (page - 1) * limit;
        
        const totalCars = await Car.countDocuments();
        const totalPages = Math.ceil(totalCars / limit);
        
        const cars = await Car.find({})
            .skip(startIndex)
            .limit(limit);
            
        res.send({ 
            cars, 
            currentPage: page, 
            totalPages, 
            totalCars,
            totalPaginate: Math.round(totalCars / cars?.length)
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get A Single Car Details - /car/:id endpoint
exports.getCarById = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await Car.findById(id);
        res.json(car);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.addProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const car = new Car(newProduct);
        const result = await car.save();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const updateReq = req.body;
        
        const result = await Car.updateOne(
            { _id: id },
            { $set: updateReq },
            { upsert: true }
        );
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        
        const result = await Car.deleteOne({ _id: id });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
