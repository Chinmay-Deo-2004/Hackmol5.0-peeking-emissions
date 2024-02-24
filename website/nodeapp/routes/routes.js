var express = require('express');
var router = express.Router();
var fetchController= require('../controllers/fetch-controller');

const {getdata} = require("../controllers/getdata")

router.get('/fetch-data',fetchController.fetchData);
router.post("/getdata", getdata);

module.exports = router;