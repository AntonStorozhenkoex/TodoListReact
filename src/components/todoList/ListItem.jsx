import React from "react";
import BtnDelete from "./ButtonDelete";
import "../../index.css";

const ListItem = ({ todo, setTodo, todos, listItemChange }) => {
  return (
    <div className="listItem">
      <li
        className={todo.isDone ? "done" : "notDone"}
        onClick={() => listItemChange(todo.id)}
      >
        {todo.value}
      </li>
      <BtnDelete todos={todos} id={todo.id} setTodo={setTodo} />
    </div>
  );
};
export default ListItem;
