const express = require('express');
const router = express.Router();
var controller = require('../Controller/projectController');

//createProject
// router.route('/createProject').post(controller.createProjects);
//showProject
router.route('/product-list').get(controller.showProduct);
router.route('/add-product').post(controller.addProduct);
router.route('/:id/update-product').put(controller.updateProduct);
router.route('/:id/delete-product').delete(controller.destroyProduct);
router.route('/product/:id').get(controller.getProductById);

module.exports = router;