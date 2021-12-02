const express = require('express');
const router = express.Router();

const userRoutes = require("./userControllers");
router.use("/users",userRoutes);

const postRoutes = require("./postControllers");
router.use("/posts",postRoutes);

module.exports = router;