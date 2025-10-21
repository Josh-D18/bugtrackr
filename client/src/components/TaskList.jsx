import React from "react";

const TaskList = ({ tasks, onDelete }) => {
  if (!tasks.length) return <p>No tasks yet...</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <span>{task.title}</span>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
