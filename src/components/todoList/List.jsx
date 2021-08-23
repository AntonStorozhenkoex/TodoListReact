import React from "react";
import { ListItem } from "./ListItem";

export const List = ({
  todos,
  setTodo,
  fetchData,
  getTodosByFilter,
  listItemChange,
  deleteItemAPI,
}) => {
  return (
    <ul className="list">
      {todos.length > 0 ? (
        getTodosByFilter.map((todo) => (
          <ListItem
            fetchData={fetchData}
            deleteItemAPI={deleteItemAPI}
            listItemChange={listItemChange}
            setTodo={setTodo}
            todos={todos}
            todo={todo}
            key={todo.id}
          />
        ))
      ) : (
        <li>No records found</li>
      )}
    </ul>
  );
};
