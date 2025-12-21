import React from "react";

const CommonHeading = ({ headingText, classNames }) => {
  return (
    <h2 className={`text-xl font-semibold text-gray-800 mb-4 ${classNames}`}>
      {headingText}
    </h2>
  );
};

export default CommonHeading;
