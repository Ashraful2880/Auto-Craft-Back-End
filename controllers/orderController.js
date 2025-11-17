const Order = require("../models/Order");
const Car = require("../models/Car");
const { ObjectId } = require("mongodb");

// Make an Order - /makeOrder endpoint
exports.makeOrder = async (req, res) => {
    try {
        const newOrder = req.body;
        const order = new Order(newOrder);
        const result = await order.save();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get All Orders - /orders endpoint
exports.getAllOrders = async (req, res) => {
    try {
        const allOrders = await Order.find({});
        res.json(allOrders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get Specific User Orders By Email - /myOrders/:email endpoint
exports.getUserOrders = async (req, res) => {
    try {
        const userEmail = req.params.email;
        const myOrdersList = await Order.find({ email: userEmail });
        res.json(myOrdersList);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Find All Order Information For Specific User - /findOrder endpoint
exports.findOrderProducts = async (req, res) => {
    try {
        const bodyData = req.body;
        const products = await Car.find({});
        const orderInformation = products?.filter((product) =>
            bodyData?.includes(product._id.toString())
        );
        res.json(orderInformation);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update Product Status - /status/:id endpoint
exports.updateOrderStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const filter = { id: id };
        const updateStatus = { $set: { status: "Approve" } };
        const result = await Order.updateOne(filter, updateStatus, {
            upsert: true,
        });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteOrder= async (req, res) => {
   try {
       const id= req.params.id;
       const result= await Order.deleteOne({_id:id});
       res.json(result);
   } catch (err) {
       console.error(err);
       res.status(500).json({ error: 'Internal Server Error' });
   }
}
