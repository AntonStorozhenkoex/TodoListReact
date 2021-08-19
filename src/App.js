import Header from "./components/todoList/Header";
import TodoList from "./components/todoList/TodoList";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState([
        {id: 1, value: "Начать Todo", isDone: true},
        {id: 2, value: "Закончить Todo", isDone: false}
    ])
    const [filter, setFilter] = useState('all')

    const getTodosByFilter = () => {
        if (filter === 'all') {
            return todos
        }

        if (filter === 'active') {
            return (todos.filter((elem) => elem.isDone === false))
        }

        if (filter === 'finish') {
            return (todos.filter((elem) => elem.isDone === true))
        }
    }

    return (
        <div className="App myApp">
            <Header/>
            <TodoList
                setFilter={setFilter}
                getTodosByFilter={getTodosByFilter()}
                todos={todos}
                setTodos={setTodos}/>
        </div>
    );
}

export default App;
