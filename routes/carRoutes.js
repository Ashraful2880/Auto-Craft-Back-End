const express = require("express");
const {
    getAllCars,
    getCarsWithPagination,
    getCarById,
    addProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/carController");

const router = express.Router();

// Match old project endpoints exactly
router.get("/allCars", getAllCars);
router.get("/cars", getCarsWithPagination);
router.get("/car/:id", getCarById);
router.post("/addProduct", addProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;
