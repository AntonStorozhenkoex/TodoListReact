import React from "react";
import BtnDelete from "./ButtonDelete";
import "../../index.css";

const ListItem = ({ todo, setTodo, todos, listItemChange }) => {
  const deleteItem = () => {
    setTodo(todos.filter((item) => item.id !== todo.id));
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
export default ListItem;
