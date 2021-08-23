import React from "react";
import {BtnDelete} from "./ButtonDelete";
import {deleteTodo} from "../../services";
export  const ListItem = ({ todo, setTodo, todos, listItemChange,fetchData}) => {
  const deleteItem = () => {
    setTodo(todos.filter((item) => item.id !== todo.id));
    deleteTodo(todo).then(fetchData);
  };
  return (
    <div className="listItem">
      <li
        className={todo.isDone ? "done" : "notDone"}
        onClick={() => listItemChange(todo.id)}
      >
        {todo.value}
      </li>
      <BtnDelete deleteItem={deleteItem} />
    </div>
  );
};
