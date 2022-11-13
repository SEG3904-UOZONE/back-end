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
      const { courseId } = req.params;
      const course = await pool.query("SELECT * FROM courses WHERE course_id = $1", [
        courseId
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
      const { course_id, code, number, term, year, section, units, isClosed, name_en, name_fr, startDate, endDate, classes } = req.body;
      const newCourse = await pool.query(
        "INSERT INTO courses VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
        [course_id, code, number, term, year, section, units, isClosed, name_en, name_fr, startDate, endDate, classes]
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
      const { courseId } = req.params;
      const { code, number, term, year, section, units, isClosed, name_en, name_fr, startDate, endDate, classes } = req.body;
      const updateCourse = await pool.query(
        "UPDATE courses SET VALUES($2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) WHERE course_id = $1",
        [courseId, code, number, term, year, section, units, isClosed, name_en, name_fr, startDate, endDate, classes]
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
      const { courseId } = req.params;
      const deletedCourse = await pool.query("DELETE FROM courses WHERE course_id = $1", [
        courseId
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