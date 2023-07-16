'use client'
import React, { useState } from 'react';
import styles from './page.module.css';

interface Task {
  id: number;
  content: string;
}

const TodoList: React.FC = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [deletedTasks, setDeletedTasks] = useState<Task[]>([]);

  const addTask = () => {
    const task = taskInput.trim();
    if (task !== '') {
      const newTask: Task = {
        id: Date.now(),
        content: task,
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const deleteTask = (taskId: number) => {
    const taskToDelete = tasks.find(task => task.id === taskId);
    if (taskToDelete) {
      setTasks(tasks.filter(task => task.id !== taskId));
      setDeletedTasks([...deletedTasks, taskToDelete]);
    }
  };

  const undoDelete = (taskId: number) => {
    const taskToUndo = deletedTasks.find(task => task.id === taskId);
    if (taskToUndo) {
      setDeletedTasks(deletedTasks.filter(task => task.id !== taskId));
      setTasks([...tasks, taskToUndo]);
    }
  };

  const clearAll = () => {
    setTasks([]);
  };

  const deleteAll = () => {
    setDeletedTasks([]);
  };

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>

      <div className={styles['task-input']}>
        <input type="text" value={taskInput} onChange={e => setTaskInput(e.target.value)} />
        <button className={styles.button} onClick={addTask}>
          Add
        </button>
      </div>

      <h2>Added Todos</h2>
      <ul className={styles['todo-list']}>
        {tasks.map(task => (
          <li key={task.id} className={styles.task}>
            {task.content}
            <button className={styles.button} onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button className={styles['clear-button']} onClick={clearAll}>
        Clear All
      </button>

      <h2>Recently Deleted Todos</h2>
      <ul className={styles['deleted-list']}>
        {deletedTasks.map(task => (
          <li key={task.id} className={styles.task}>
            {task.content}
            <button className={styles.button} onClick={() => undoDelete(task.id)}>
              Undo
            </button>
          </li>
        ))}
      </ul>
      <button className={styles['clear-button']} onClick={deleteAll}>
        Delete All
      </button>
    </div>
  );
};

export default TodoList;
