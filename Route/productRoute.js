const express = require('express');
const router = express.Router();
var controller = require('../Controller/projectController');

//createProject
// router.route('/createProject').post(controller.createProjects);
//showProject
router.route('/product-list').get(controller.showProduct);

module.exports = router;