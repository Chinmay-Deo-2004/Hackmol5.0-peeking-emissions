var express = require('express');
var router = express.Router();

const {sendData} = require("../controllers/sendData")

router.post("/sendData", sendData);

module.exports = router;