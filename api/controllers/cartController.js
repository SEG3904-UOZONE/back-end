const pool = require('../../database/queries')


/**
 * @controller GET /cart
 * @desc Get all cart
 */
 const cart_GET_All = async (req, res) => {
    try {
      const allcart = await pool.query("SELECT * FROM cart");
      res.json(allcart.rows);
    } catch (err) {
      console.error(err.message);
    }
  };


/**
 * @controller GET /cart/:cartItemId
 * @desc Get a single cart item
 */
const cart_GET_One = async (req, res) => {
    try {
      const { id } = req.params;
      const cartItem = await pool.query("SELECT * FROM cart WHERE cart_item_id = $1", [
        id
      ]);
      res.json(cartItem.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };


/**
 * @controller POST /cart
 * @desc Create a new cart item
 */
const cart_POST = async (req, res) => {
    try {
      const { description } = req.body;
      const newCartItem = await pool.query(
        "INSERT INTO cart (description) VALUES($1) RETURNING *",
        [description]
      );
  
      res.json(newCartItem.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };


/**
 * @controller PUT /cart/:cartItemId
 * @desc Update a cart item
 */
const cart_PUT = async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updatedCartItem = await pool.query(
        "UPDATE cart SET description = $1 WHERE cart_item_id = $2",
        [description, id]
      );
  
      res.json(updatedCartItem);
    } catch (err) {
      console.error(err.message);
    }
  };


/**
 * @controller DELETE /cart/:cartItemId
 * @desc Delete a cart item
 */
const cart_DELETE = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedcartItem = await pool.query("DELETE FROM cart WHERE cart_item_id = $1", [
        id
      ]);
      res.json(deletedcartItem);
    } catch (err) {
      console.log(err.message);
    }
  };


// Exporting all controllers
module.exports = {
    cart_GET_All,
    cart_GET_One,
    cart_POST,
    cart_PUT,
    cart_DELETE
}