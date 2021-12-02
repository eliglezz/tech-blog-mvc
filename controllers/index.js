const express = require('express');
const router = express.Router();

const apiRoutes = require("./api");
router.use(apiRoutes);

const frontEndRoutes = require("./frontEndRoutes");
router.use(frontEndRoutes);

const sessionRoutes = require("./sessionsRouter")
router.use(sessionRoutes)


module.exports = router;