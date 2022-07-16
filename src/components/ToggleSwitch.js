import React from "react";

function ToggleSwitch() {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <p className="theme-text">Theme</p>
    </div>
  );
}

export default ToggleSwitch;
