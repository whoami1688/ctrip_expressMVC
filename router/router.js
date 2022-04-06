const express = require('express')
const router = express.Router()
const controll = require("../control/control")
router.get("/", controll.testCtl)

module.exports.router=router
