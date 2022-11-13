const express = require('express');
const router = express.Router();


// import the courses controller
const coursesController = require('../controllers/coursesController');


/**
 * @route GET /courses
 * @desc Get all courses from the inventory
 * @access Public
 */
router.get('/', coursesController.courses_GET_All);


/**
 * @route GET /courses/:courseId
 * @desc Get a single course
 * @access Public
 */
router.get('/:courseId', coursesController.courses_GET_One);


/**
 * @route POST /courses
 * @desc Create a new course
 * @access Public
 */
router.post('/', coursesController.courses_POST);


/**
 * @route PATCH /course/:courseId
 * @desc Update a value for an course
 * @access Public
 */
router.put('/:courseId', coursesController.courses_PUT);


/**
 * @route DELETE /courses/:courseId
 * @desc Delete an course
 * @access Public
 */
router.delete('/:courseId', coursesController.courses_DELETE);


// Exporting the router
module.exports = router;