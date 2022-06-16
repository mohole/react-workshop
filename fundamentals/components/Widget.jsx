import { useState } from "react";

import { Todo } from "./Todo";
import { Form } from "./Form";
import { Footer } from "./Footer";

import data from "./../data.json";

export const Widget = () => {
  /**
   * Internal states of the widget
   */
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
      <Form text={text} addItem={addItem} setText={setText} />
      <ul>
        {todos.map((todo, index) => (
          /**
           * within a loop that generate HTML items in JSX, the "key" property
           * is required by React to keep track of the HTML nodes changes
           * https://reactjs.org/docs/lists-and-keys.html
           */
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
      <Footer todos={todos} />
    </div>
  );
};
