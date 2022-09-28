import React from "react";
import "./footer.css";

function Footer({ todos, setTodos, setStatus }) {
  //const activeTodos = todos.filter((todo) => todo.done === false);

  //const completedTodos = todos.filter((todo) => todo.done === true);

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const deleteCompleted = () => {
    let index = 0;
    setTodos(
      (todos = todos
        .filter((item) => item.done === false)
        .map((item) => {
          index++;
          return {
            id: index,
            data: item.todoText,
            done: item.done,
          };
        }))
    );
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.filter((todo) => !todo.done).length}</strong> items left
      </span>
      <ul className="filters" onChange={statusHandler}>
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/">Active</a>
        </li>
        <li>
          <a href="#/">Completed</a>
        </li>
      </ul>
      {todos.filter((todo) => todo.done).length >= 1 && (
        <button className="clear-completed" onClick={deleteCompleted}>
          Clear Completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
