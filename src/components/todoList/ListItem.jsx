import React from "react";
import BtnDelete from "./ButtonDelete";
import '../../index.css';

const ListItem = ({todo, setTodo, todos, id}) => {
    console.log(todo)
    const listItemChange = () => {
        setTodo(todos.map((elem) => {
            if (elem.id === id) {
                elem.isDone = !(elem.isDone)
            }
            return elem
        }))
    }

    return (
        <div className='listItem'>
            <li className={todo.isDone ? 'done' : 'notDone'} onClick={listItemChange}>
                {todo.value}
            </li>
            <BtnDelete todos={todos} id={id} setTodo={setTodo}/>
        </div>
    )
}
export default ListItem;
