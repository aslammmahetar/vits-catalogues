import React from "react";

const NegativeButton = ({ classNames, text, onClick }) => {
  return (
    <button
      className={`button-negative ${classNames}`}
      role="button"
      onClick={onClick}
    >
      <span className="text">{text}</span>
    </button>
  );
};

export default NegativeButton;
