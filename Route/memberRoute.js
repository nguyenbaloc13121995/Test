const express = require('express');
const router = express.Router();
var controller = require('../Controller/memberController');

//createMember
router.route('/createMember').post(controller.createMembers);

module.exports = router;