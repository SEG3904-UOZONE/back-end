const express = require('express');
const router = express.Router();


// import the cart controller
const cartController = require('../controllers/cartController');


/**
 * @route GET /cart
 * @desc Get all cart items from the inventory
 * @access Public
 */
router.get('/', cartController.cart_GET_All);


/**
 * @route GET /cart/:cartItemId
 * @desc Get a single cartItem
 * @access Public
 */
router.get('/:cartItemId', cartController.cart_GET_One);


/**
 * @route POST /cart
 * @desc Create a new cart item
 * @access Public
 */
router.post('/', cartController.cart_POST);


/**
 * @route PATCH /cart/:cartItemId
 * @desc Update a value for a cart item
 * @access Public
 */
router.put('/:cartItemId', cartController.cart_PUT);


/**
 * @route DELETE /cart/:cartItemId
 * @desc Delete a cart item
 * @access Public
 */
router.delete('/:cartItemId', cartController.cart_DELETE);


// Exporting the router
module.exports = router;