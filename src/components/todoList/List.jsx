import React from "react";
import ListItem from "./ListItem";
import '../../index.css'

const List = ({todos, setTodo, getTodosByFilter}) => {
    return (
        <ul className='list'>
            {

                getTodosByFilter.map(todo => <ListItem setTodo={setTodo}
                                                       todos={todos}
                                                       todo={todo}
                                                       id={todo.id}
                                                       key={todo.id}/>)
            }
        </ul>
    )
}

export default List;
