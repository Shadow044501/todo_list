import React from "react";

// Header component that displays the app title and a button to start
function Header({ onStart }) {
  return (
    <div class="taskdo-container" style={{ textAlign: "center",marginTop:"-60px" }}>
      {/* App title */}
      <h1 style={{marginBottom:"-20px"}}>TaskDo</h1>

      {/* App description */}
      <p>Easily Organize and Manage Your Tasks</p>

      {/* Start button with event handler */}
      <button onClick={onStart} className="button-27" role="button">
        Get Started
      </button>
    </div>
  );
}

export default Header;
