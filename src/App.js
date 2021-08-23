import Header from "./components/todoList/Header";
import TodoList from "./components/todoList/TodoList";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  useEffect(() => {
    fetchData();
  }, []);
  const [todos, setTodos] = useState([
    //{ id: uuidv4(), value: "Начать Todo", isDone: true },
    //  { id: uuidv4(), value: "Закончить Todo", isDone: false },
  ]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:8081/api/todos");
    setTodos(await response.json());
  };
  function AddNewTodoAPI(inputValue) {
    return fetch("http://localhost:8081/api/todos/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: inputValue }),
    }).then(fetchData);
  }
  function listItemChangeAPI(elem) {
    return fetch(`http://localhost:8081/api/todos/toggle/${elem.id}`, {
      method: "PUT",
    }).then(fetchData);
  }
  function deleteItemAPI(todo) {
    return fetch(`http://localhost:8081/api/todos/${todo.id}`, {
      method: "DELETE",
    }).then(fetchData);
  }
  function deleteAllItemsAPI() {
    return fetch(`http://localhost:8081/api/todos/`, {
      method: "DELETE",
    }).then(fetchData);
  }
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

  /*function FetchTodo(route,method,body){
    return fetch(route,{
      method:method,
      header:{'Content-Type':'application/json'},
      body: JSON.stringify(body),
    })
  }
  */
  const handleAddTodo = (inputValue, setInputValue) => {
    if (inputValue) {
      AddNewTodoAPI(inputValue);
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
          listItemChangeAPI(elem);
        }
        return elem;
      })
    );
  };

  return (
    <div className="App myApp">
      <Header />
      <TodoList
        deleteAllItemsAPI={deleteAllItemsAPI}
        deleteItemAPI={deleteItemAPI}
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
