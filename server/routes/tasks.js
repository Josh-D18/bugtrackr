import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// BUG 1: Something here prevents tasks from saving properly
router.post("/add", async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      completed: req.body.completed || false,
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Could not create task" });
  }
});

// BUG 2: The GET route returns unexpected results
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({ tasks });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
});

// BUG 3: Delete sometimes fails silently
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Could not delete" });
  }
});

export default router;
