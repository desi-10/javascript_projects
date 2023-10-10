const inputEl = document.getElementById("input-el");
const todoEl = document.getElementById("todos");
const btnEl = document.getElementById("btn");

let todos = [];

const saveToLocalStorage = (todos) => {
  localStorage.setItem("todo", JSON.stringify(todos));
};

btnEl.addEventListener("click", (event) => {
  event.preventDefault();
  let text = inputEl.value;
  todos.push(text);
  const div = document.createElement("div");
  div.textContent = text;
  todoEl.appendChild(div);
  saveToLocalStorage(todos);
  inputEl.value = "";
});

const renderTodos = () => {
  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.textContent = todo;
    todoEl.appendChild(div);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const storage = localStorage.getItem("todos");
  if (storage) {
    return (todos = JSON.parse(storage));
  }
  todos = [];
});
