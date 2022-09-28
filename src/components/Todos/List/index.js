import "./list.css";

function List({ todos, setTodos }) {
  const deleteHandle = (todoKey) => {
    setTodos(todos.filter((todo, key) => key !== todoKey));
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          todo.done = !todo.done;
          todo.done ? (todo.status = "completed") : (todo.status = "active");
        }

        return todo;
      })
    );
  };

  

  return (
    <>
      <ul className="todo-list">
        {todos.map((todo, i) => (
          <li
            key={i}
            id={i}
            todo={todo}
            className={todo.done ? "completed" : ""}
          >
            <div className="view">
              <input
                type="checkbox"
                className="toggle"
                onClick={() => toggleTodo(i)}
              />

              <label>{todo.todoText}</label>
              {/* <input
                type="text"
                value={todo.todoText}
              /> */}

              <button
                onClick={() => deleteHandle(i)}
                className="destroy"
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
