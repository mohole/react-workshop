import { useState } from "react";

import { Todo } from "./Todo";
import data from "./../data.json";

export const Widget = () => {
  const [todos, setTodos] = useState(data);
  const [text, setText] = useState("");

  const updateItem = (index) => {
    const current = [...todos];
    current[index].done = !current[index].done;
    setTodos(current);
  };

  const addItem = (event) => {
    event.preventDefault();
    const updated = todos.concat([{ done: false, label: text }]);
    setTodos(updated);
    setText("");
  };

  return (
    <div>
      <h3 className="text-xl font-bold my-5">Todo Widget</h3>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Add a new todo"
          className="input input-bordered w-full max-w-xs"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <Todo
              label={todo.label}
              done={todo.done}
              index={index}
              changeCallback={updateItem}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
