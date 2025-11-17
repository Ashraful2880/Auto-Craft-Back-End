const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pxp8q.mongodb.net/carCollections?retryWrites=true&w=majority`).then(() => {
    console.log("MongoDB connected successfully");
    console.log('Connected to DB:', mongoose.connection.db.databaseName);
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

// Import Routes (ensure you have these routes set up)
const carRoutes = require("./routes/carRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const miscRoutes = require("./routes/miscRoutes");

// Route Middleware - matching old project endpoints exactly
app.use("/", carRoutes);
app.use("/", orderRoutes);
app.use("/", userRoutes);
app.use("/", blogRoutes);
app.use("/", miscRoutes);

app.get("/", (req, res) => {
    res.send("Running Auto Craft");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
