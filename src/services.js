import {link} from "./localhost";



export function createNewTodo(inputValue) {
    return fetch(link, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: inputValue }),
    });
}
export function listItemToggle(elem) {
    return fetch(`${link}/toggle/${elem.id}`, {
        method: "PUT",
    });
}
export function deleteTodo(todo) {
    return fetch(`${link}${todo.id}`, {
        method: "DELETE",
    });
}
export function deleteAllItems() {
    return fetch(link, {
        method: "DELETE",
    });
}