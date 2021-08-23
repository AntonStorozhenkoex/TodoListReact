import { Header } from "./components/todoList/Header";
import { TodoList } from "./components/todoList/TodoList";
import { useEffect, useState } from "react";
import "./index.css";
import { link } from "./localhost";
import { createNewTodo, listItemToggle } from "./services";

export const App =  () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const fetchData = async () => {
    const response = await fetch(link);
    setTodos(await response.json());
  };


  const getTodosByFilter = () => {
    if (filter === "all") {
      return todos;
    }

    if (filter === "active") {
      return todos.filter((elem) => !elem.isDone);
    }

    if (filter === "finish") {
      return todos.filter((elem) => elem.isDone);
    }
  };
  const handleAddTodo = (inputValue, setInputValue) => {
    if (inputValue) {
      createNewTodo(inputValue).then(fetchData);
      setInputValue("");
    } else {
      alert("Введите корректное значение");
    }
  };
  const listItemChange = (id) => {
    setTodos(
      todos.map((elem) => {
        if (elem.id === id) {
          elem.isDone = !elem.isDone;
          listItemToggle(elem).then(fetchData);
        }
        return elem;
      })
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App myApp">
      <Header />
      <TodoList
        fetchData={fetchData}
        handleAddTodo={handleAddTodo}
        listItemChange={listItemChange}
        filter={filter}
        setFilter={setFilter}
        getTodosByFilter={getTodosByFilter()}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

