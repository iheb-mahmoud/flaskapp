const express = require('express')
const router = express.Router()
const {getTasks, createTask, updateTask, deleteTask} = require('../controllers/taskController')

const {protecc} = require('../middleware/authMiddleware')

router.route('/').get(protecc, getTasks).post(protecc, createTask)
router.route('/:id').delete(protecc, deleteTask).put(protecc, updateTask)

module.exports = router 