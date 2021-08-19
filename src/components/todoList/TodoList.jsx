import React from "react";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

const TodoList = ({todos, setTodos, getTodosByFilter, setFilter}) => {
    return (
        <div>
            <Form
                setTodos={setTodos}
                todos={todos}/>
            <List getTodosByFilter={getTodosByFilter}
                  setTodo={setTodos}
                  todos={todos}/>
            <Footer
                setFilter={setFilter}
                setTodo={setTodos}/>
        </div>
    )
}


export default TodoList;