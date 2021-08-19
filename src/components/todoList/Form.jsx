import React from "react";
import Input from "./Input";
import Button from "./Button";
import {useState} from "react";

const Form = ({setTodos, todos}) => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        if (inputValue) {
            let obj = {
                id: todos.length + 1,
                value: inputValue,
                isDone: false
            };
            const newTodos = todos.concat(obj)
            setTodos(newTodos)
            setInputValue('')
        } else {
            alert('Введите корректное значение')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input todos={todos} setTodos={setTodos} inputValue={inputValue} setInputValue={setInputValue}/>
            <Button inputValue={inputValue} todos={todos} setTodos={setTodos}/>
        </form>
    )
}

export default Form;