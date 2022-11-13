const pool = require('../../database/queries')


/**
 * @controller GET /courses
 * @desc Get all courses
 */
 const courses_GET_All = async (req, res) => {
    try {
      const allCourses = await pool.query("SELECT * FROM courses");
      res.json(allCourses.rows);
    } catch (err) {
      console.error(err.message);
    }
  };


/**
 * @controller GET /courses/:courseId
 * @desc Get a single course
 */
const courses_GET_One = async (req, res) => {
    try {
      const { id } = req.params;
      const course = await pool.query("SELECT * FROM courses WHERE course_id = $1", [
        id
      ]);
      res.json(course.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };


/**
 * @controller POST /courses
 * @desc Create a new course
 */
const courses_POST = async (req, res) => {
    try {
      const { description } = req.body;
      const newCourse = await pool.query(
        "INSERT INTO courses (description) VALUES($1) RETURNING *",
        [description]
      );
  
      res.json(newCourse.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  };


/**
 * @controller PUT /courses/:courseId
 * @desc Update a course
 */
const courses_PUT = async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updateCourse = await pool.query(
        "UPDATE courses SET description = $1 WHERE course_id = $2",
        [description, id]
      );
  
      res.json(updateCourse);
    } catch (err) {
      console.error(err.message);
    }
  };


/**
 * @controller DELETE /courses/:courseId
 * @desc Delete a course
 */
const courses_DELETE = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCourse = await pool.query("DELETE FROM courses WHERE course_id = $1", [
        id
      ]);
      res.json(deletedCourse);
    } catch (err) {
      console.log(err.message);
    }
  };


// Exporting all controllers
module.exports = {
    courses_GET_All,
    courses_GET_One,
    courses_POST,
    courses_PUT,
    courses_DELETE
}