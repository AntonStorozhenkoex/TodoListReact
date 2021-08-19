import React from "react";
import "../../index.css"

const BtnDelete = ({setTodo, todos, id}) => {
    return (
        <button className='deleteButton' onClick={() => setTodo(todos.filter(todo => todo.id !== id))}>
            X
        </button>
    )
}

export default BtnDelete;