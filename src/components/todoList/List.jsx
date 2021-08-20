import React from "react";
import ListItem from "./ListItem";
import "../../index.css";

const List = ({ todos, setTodo, getTodosByFilter, listItemChange }) => {
  return (
    <ul className="list">
      {getTodosByFilter.map((todo) => (
        <ListItem
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
