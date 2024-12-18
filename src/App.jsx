import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./index.css";

const App = () => {
  const [isTodoVisible, setTodoVisible] = useState(false); // Manage the visibility of TodoList

  return (
    <div>
      {/* Show Header if isTodoVisible is false */}
      {!isTodoVisible ? (
        <Header onStart={() => setTodoVisible(true)} />
      ) : (
        // Show TodoList if isTodoVisible is true
        <ToDoList />
      )}
    </div>
  );
};

export default App;

