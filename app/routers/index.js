// Imports
const express = require("express");

// Routes imports
const mainRouter = require("./mainRouter");

// Router
const router = express.Router();

// Routes
router.use("/", mainRouter);

// Exports
module.exports = router;
