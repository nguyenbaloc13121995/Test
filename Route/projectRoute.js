const express = require('express');
const router = express.Router();
var controller = require('../Controller/projectController');

//createProject
router.route('/createProject').post(controller.createProjects);
//showProject
router.route('/showProject').get(controller.showProjects);

module.exports = router;