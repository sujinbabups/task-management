const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Task=require('../models/TaskSchema.js');

const router = express.Router();


router.post('/addtask', async (req, res) => {
  const { title, status,description, date } = req.body;
  const newTask = new Task({ title,status,description, date });
  try {
    await newTask.save();
    res.status(201).json(newTask);
    res.send({ message: 'Task added successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

router.get('/viewtasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: "no task found" });
  }
});

router.put('/updatetask/:id', async (req, res) => {
    const { id } = req.params;
    const { task, description, date,status,priority } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No task with that id');
    const updatedTask = { task, description, date,status,priority, _id: id };
    await Task.findByIdAndUpdate(id, updatedTask, { new: true });
    res.json(updatedTask);
    }
    );

    router.delete('/deletetask/:id', async (req, res) => {
        const { id } = req.params;
    
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send('No task with that id');
        }
    
        try {
            await Task.findByIdAndDelete(id);
            res.json({ message: 'Task deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error deleting task');
        }
    });

    
    


    module.exports = router;

