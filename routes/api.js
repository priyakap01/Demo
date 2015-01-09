// Dependencies
var express = require('express');
var router  = express.Router();


//Models
var ProjectDetail = require('../models/product');
var ProjectKpi = require('../models/kpi');

//Routes
ProjectDetail.methods(['get', 'post', 'put', 'delete']);
ProjectDetail.register(router, '/products');


ProjectKpi.methods(['get', 'post', 'put', 'delete']);
ProjectKpi.register(router, '/kpi');



//Return router
module.exports = router;