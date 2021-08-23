import React from "react";
import { Form } from "./Form";
import { List } from "./List";
import { Footer } from "./Footer";

export const TodoList = ({
  deleteAllItems,
  newData,
  todos,
  fetchData,
  setTodos,
  getTodosByFilter,
  setFilter,
  filter,
  handleAddTodo,
  listItemChange,
  deleteItemAPI,
}) => {
  return (
    <div>
      <Form handleAddTodo={handleAddTodo} todos={todos} />
      <List
        deleteItemAPI={deleteItemAPI}
        newData={newData}
        fetchData={fetchData}
        listItemChange={listItemChange}
        getTodosByFilter={getTodosByFilter}
        setTodo={setTodos}
        todos={todos}
      />
      <Footer
        fetchData={fetchData}
        filter={filter}
        setFilter={setFilter}
        setTodo={setTodos}
        deleteAllItems={deleteAllItems}
      />
    </div>
  );
};
