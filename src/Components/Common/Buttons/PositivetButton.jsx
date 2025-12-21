import React from "react";

const PositivetButton = ({ text, onClick, disabled, className, icon }) => {
  return (
    <button
      className={`button-positive ${className}`}
      role="button"
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <span className="text">{text}</span>
    </button>
  );
};

export default PositivetButton;
