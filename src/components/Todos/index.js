import React from "react";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";
import "./todos.css";
import { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  

   const allSelected = () => {
     setTodos(
       todos.map((todo) => {
         todo.done ? (todo.done = false) : (todo.done = true);
         todo.done ? (todo.status = "completed" ) : (todo.status = "active");
        return todo;
       })
     );
   };

  // Selected Button
  // const allSelected = () => {
  //    todos.map((todo) => {
  //     return {
  //       // data: todo.data,
  //       // id: todo.id,
  //       // done: todos.every((item) => item.done === true) ? false : true,
  //       done : todos.every((todo) => todo.checked === true) ? false : true,
  //       //done ? (todo.status = "completed" ) : (todo.status = "active");
  //     };
  //   });
  //   setTodos(todos);
  // };

  return (
    <>
      <Form addTodo={setTodos} todos={todos} />
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={allSelected}>
          Mark all as complete
        </label>
        <List todos={todos} setTodos={setTodos} />
      </section>
      <Footer todos={todos} />
    </>
  );
}

export default Todos;
