import React from "react";
import '../../index.css';

const Input = ({setInputValue, setTodos, todos, inputValue}) => {
    return (
        <input className='input' placeholder='Введите новое значение' value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}/>
    )
}


export default Input
