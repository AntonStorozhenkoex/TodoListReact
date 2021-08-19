import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const Form = ({ todos, handleAddTodo }) => {
  console.log(todos);
  const [inputValue, setInputValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(inputValue, setInputValue);
      }}
    >
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <Button />
    </form>
  );
};

export default Form;
