const express = require("express");
const {
    makeOrder,
    getAllOrders,
    getUserOrders,
    deleteOrder,
    findOrderProducts,
    updateOrderStatus,
} = require("../controllers/orderController");

const router = express.Router();

// Match old project endpoints exactly
router.post("/makeOrder", makeOrder);
router.get("/orders", getAllOrders);
router.get("/myOrders/:email", getUserOrders);
router.post("/findOrder", findOrderProducts);
router.delete("/deleteOrder/:id", deleteOrder);
router.put("/status/:id", updateOrderStatus);

module.exports = router;
