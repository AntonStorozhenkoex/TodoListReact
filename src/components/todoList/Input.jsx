import React from "react";
import "../../index.css";

const Input = ({ inputValue, changeInputValue }) => {
  return (
    <input
      className="input"
      placeholder="Введите новое значение"
      value={inputValue}
      onChange={(e) => changeInputValue(e)}
    />
  );
};

export default Input;
