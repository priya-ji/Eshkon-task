import React from 'react';

const TaskList = ({ tasks, onDelete }) => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {tasks.map(task => (
      <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', padding: 8, borderBottom: '1px solid #ccc' }}>
        <span>{task.text}</span>
        <button onClick={() => onDelete(task.id)} style={{ color: 'red' }}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TaskList;
