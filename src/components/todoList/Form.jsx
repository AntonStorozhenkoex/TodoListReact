import React,{useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";


export const Form = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const addNewTodo = (e) => {
    e.preventDefault();
    handleAddTodo(inputValue, setInputValue);
  };
  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form onSubmit={(e) => addNewTodo(e)}>
      <Input inputValue={inputValue} changeInputValue={changeInputValue} />
      <Button />
    </form>
  );
};


