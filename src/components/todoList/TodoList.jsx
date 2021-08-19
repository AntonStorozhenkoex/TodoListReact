import React from "react";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

const TodoList = ({
  todos,
  setTodos,
  getTodosByFilter,
  setFilter,
  filter,
  handleAddTodo,
  listItemChange,
}) => {
  return (
    <div>
      <Form handleAddTodo={handleAddTodo} todos={todos} />

      <List
        listItemChange={listItemChange}
        getTodosByFilter={getTodosByFilter}
        setTodo={setTodos}
        todos={todos}
      />

      <Footer filter={filter} setFilter={setFilter} setTodo={setTodos} />
    </div>
  );
};

export default TodoList;
