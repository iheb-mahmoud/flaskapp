const asyncHandler = require('express-async-handler')

const Task = require('../models/taskModel')
const User = require('../models/userModel')

//@desc Gets tasks
// @route GET /api/tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
const tasks = await Task.find({ user: req.user.id })

  res.status(200).json(tasks)
})

//@desc Create tasks
// @route POST /api/tasks
// @access Private
const createTask = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field!')
  }

  const task = await Task.create({
    text: req.body.text,
    user: req.user.id,
  })
   
  res.status(200).json(task)
})

//@desc Update Tasks
// @route PUT /api/tasks/id:
// @access Private
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if(!task) {
    res.status(400)
    throw new Error('Task not found')
  }

  const user = await User.findById(req.user.id)

  // Check for the user
  if(!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // This makes sure that only the login user matches their task user
  if(task.user.toString() !== user.id){
    res.status(401)
    throw new Error('User not authorized for this')
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedTask)
})

//@desc Deletes tasks
// @route DELETE /api/tasks/id:
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)

  if(!task) {
    res.status(400)
    throw new Error('Task not found')
  }

  // Check for the user
  if(!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // This makes sure that only the login user matches their task user
  if(task.user.toString() !== req.user.id){
    res.status(401)
    throw new Error('User not authorized for this')
  }

  await task.deleteOne()
  
  res.status(200).json({ id: req.params.id })
})




module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask
}