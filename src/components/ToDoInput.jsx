import React, { useState } from "react";

// Component for adding a new task
function ToDoInput({ onAddTask, onCancel }) {
  const [task, setTask] = useState(""); // State to store the task input

  // Handle form submission to add a task
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (task.trim()) { // Ensure the task is not empty or just whitespace
      onAddTask(task); // Pass the task to the parent component
      setTask(""); // Clear the input field
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f4", borderRadius: "8px", }}>
      <form onSubmit={handleSubmit} 
       style={{ display: "flex", flexDirection: "column", flexGrow: 1, }}>
        {/* Input field for entering a new task */}
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)} // Update state on input change
          placeholder="Add Task..."
          style={{
            backgroundColor: "#fff",
            color: "#333",
            fontSize: "14px",
            padding: "12px",
            width: "280px",
            border: "1px solid #ccc",
            borderRadius: "6px", // Slightly rounder corners
            marginBottom: "10px",
            marginLeft: "100px",
            marginRight:"100px",// Horizontally center using margin 
          }}

        />

<div style={{ display: "flex", justifyContent: "center",gap:"15px",marginLeft:"10px"}}>
        {/* Button to add the task */}
        <button className="button-79" type="submit">
          Done
        </button>

        {/* Button to cancel adding the task */}
        <button
          className="button-80"
          onClick={(e) => {
            e.preventDefault(); // Prevent form submission
            onCancel(); // Trigger cancel action
          }}
          type="button"
        >Return
        </button>
      </div>
      </form>
    </div>
  );
}

export default ToDoInput;
