import React from "react";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";

const TodoList = ({
  deleteAllItemsAPI,
  newData,
  todos,
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
        listItemChange={listItemChange}
        getTodosByFilter={getTodosByFilter}
        setTodo={setTodos}
        todos={todos}
      />
      <Footer
        filter={filter}
        setFilter={setFilter}
        setTodo={setTodos}
        deleteAllItemsAPI={deleteAllItemsAPI}
      />
    </div>
  );
};

export default TodoList;
