const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")
const config = require("../config/config")
router.use("/weather", controller.weather)
module.exports = router;