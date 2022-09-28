import { useState, useEffect } from "react";
import "./form.css";
const initialFormValues = { todoText: "" };

function Form({ addTodo, todos }) {
  const [input, setInput] = useState(initialFormValues);

  useEffect(() => {
    setInput(initialFormValues);
  }, [todos]);

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.todoText === "" || input.todoText.match(/^\s+$/)) {
      alert("input not empty");
    } else if (todos.find((todo) => todo.todoText === input.todoText)) {
      alert("This todo already exists");
    } else {
      const newTodo = {
        id: todos.length+1,
        todoText: input.todoText.trim(),
        done: false,
        status: "active",
      };
      addTodo([...todos, newTodo]);
    }
  };
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            name="todoText"
            className="new-todo"
            placeholder="What needs to be done?"
            value={input.todoText}
            onChange={onChangeInput}
            autoFocus
            autoComplete="off"
          />
        </form>
      </header>
    </>
  );
}

export default Form;
