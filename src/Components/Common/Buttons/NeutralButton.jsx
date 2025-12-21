import React from "react";

const NeutralButton = ({ text, onClick }) => {
  return (
    <button className="button-neutral" role="button" onClick={onClick}>
      <span className="text">{text}</span>
    </button>
  );
};

export default NeutralButton;
