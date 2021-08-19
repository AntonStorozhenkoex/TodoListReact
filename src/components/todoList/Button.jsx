import React from "react";
import '../../index.css';

const Button = ({setTodos, todos, inputValue}) => {
    return (
        <button className='addButton' type="submit">Add</button>
    )
}
export default Button;