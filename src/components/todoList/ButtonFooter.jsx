import React from "react";
import "../../index.css";

const ButtonFooter = ({ onClick, title, filter, filterExpValue }) => {
  console.log(filterExpValue, filter);
  return (
    <button
      className={filterExpValue === filter ? "selectedButton" : "footerButton"}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonFooter;
