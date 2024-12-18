import React, { useState, useEffect } from "react";
import ToDoInput from "./ToDoInput";
import { fetchTodos } from "../services/api";

function ToDoList() {
  const [showInput, setShowInput] = useState(false); // State to control the visibility of the input form
  const [tasks, setTasks] = useState([]); // State to hold the list of tasks
  const [loading, setLoading] = useState(false); // State to handle loading status

  // Fetch tasks from API on component mount
  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true); // Show loading indicator
      const data = await fetchTodos(); // Fetch tasks using API service
      setTasks(data); // Update tasks with fetched data
      setLoading(false); // Hide loading indicator
    };

    loadTasks(); // Call the function to load tasks
  }, []);

  // Add a new task to the list
  const addTask = (newTask) => {
    const newTaskObj = {
      id: Date.now(), // Generate a unique ID based on current timestamp
      text: newTask, // Use the provided task text
      isCompleted: false, // Initialize as incomplete
    };
    setTasks((prevTasks) => [newTaskObj, ...prevTasks]); // Add the new task to the start of the list
    setShowInput(false); // Hide the input form after adding
  };

  // Delete a task by its ID
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); // Remove the task with matching ID
  };

  // Toggle the completion status of a task
  const toggleCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, isCompleted: !task.isCompleted } // Toggle the isCompleted flag
          : task
      )
    );
  };

  // Cancel adding a task (hide the input form)
  const cancelAddTask = () => {
    setShowInput(false);
  };

  return (
    <div className="taskdo-container">
      <h1>TaskDo</h1> {/* Updated title for uniqueness */}
      
      {/* Show the "Add Task" button if input is hidden and not loading */}
      {!showInput && !loading && (
        <a onClick={() => setShowInput(true)} className="add-task-button">
          <div className="add-task-container">
            <div className="plus-icon">+</div>
            <span className="add-task-button">Add New Task</span>
          </div>
        </a>
      )}

      {/* Render the input form for adding a task */}
      {showInput && <ToDoInput onAddTask={addTask} onCancel={cancelAddTask} />}

      {/* Show loading text while tasks are being fetched */}
      {loading && <p className="loadingText">Loading tasks...</p>}

      {/* Display the list of tasks */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {/* Checkbox to toggle completion */}
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleCompletion(task.id)}
              className={`task-checkbox ${task.isCompleted ? "completed" : ""}`}
            />

            {/* Task text, styled based on completion status */}
            <span
              className={`task-text ${task.isCompleted ? "completed" : ""}`}
            >
              {task.text}
            </span>

            {/* Button to delete the task */}
            <button onClick={() => deleteTask(task.id)} className="task-delete">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" // Example trash icon
                alt="Delete"
                style={{
                  width: "24px",
                  height: "24px",
                  background: "none",
                }}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
