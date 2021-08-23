import React from "react";
import ListItem from "./ListItem";
import "../../index.css";

const List = ({
  todos,
  setTodo,
  getTodosByFilter,
  listItemChange,
  deleteItemAPI,
}) => {
  console.log(todos);
  return (
    <ul className="list">
      {getTodosByFilter.map((todo) => (
        <ListItem
          deleteItemAPI={deleteItemAPI}
          listItemChange={listItemChange}
          setTodo={setTodo}
          todos={todos}
          todo={todo}
          key={todo.id}
        />
      ))}
      <li className={todos.length === 0 ? "" : "hidden"}> No records found</li>
    </ul>
  );
};

export default List;
