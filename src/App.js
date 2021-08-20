import Header from "./components/todoList/Header";
import TodoList from "./components/todoList/TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), value: "Начать Todo", isDone: true },
    { id: uuidv4(), value: "Закончить Todo", isDone: false },
  ]);
  const [filter, setFilter] = useState("all");

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
      let obj = {
        id: uuidv4(),
        value: inputValue,
        isDone: false,
      };
      const newTodos = todos.concat(obj);
      setTodos(newTodos);
      setInputValue("");
    } else {
      alert("Введите корректное значение");
    }
  };
  const listItemChange = (id) => {
    setTodos(
      todos.map((elem) => {
        // TODO possible variant
        // if (elem.id === id) {
        //   return {
        //     ...elem,
        //     isDone: !elem.isDone
        //   }
        // }
        //
        // return elem
        if (elem.id === id) {
          elem.isDone = !elem.isDone;
        }

        return elem;
      })
    );
  };

  return (
    <div className="App myApp">
      <Header />
      <TodoList
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

export default App;
