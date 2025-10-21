import React, { useState, useEffect } from "react";
import { getTasks, addTask, deleteTask } from "./api";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  // BUG 4: Loading sometimes doesn’t reflect actual data
  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    if (title.length > 0) {
      await addTask(title);
      setTitle("");
      loadTasks();
    }
  };

  // BUG 5: Deleting doesn’t always update UI properly
  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(() => [...tasks.filter((task) => task._id !== id)]);
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>🐞 BugTrackr</h2>
      <form onSubmit={handleAdd}>
        <input
          placeholder="New task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
