import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={toggleTodo}
      >
        {todo.text}
      </span>
      <button onClick={deleteTodo}>Ta bort</button>
    </li>
  );
}

export default TodoItem;
