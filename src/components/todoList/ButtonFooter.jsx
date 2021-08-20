import React from "react";
import "../../index.css";

const ButtonFooter = ({ changeFilter, title, filter, filterExpValue }) => {
  return (
    <button
      className={filterExpValue === filter ? "selectedButton" : "footerButton"}
      onClick={changeFilter}
    >
      {title}
    </button>
  );
};

export default ButtonFooter;
