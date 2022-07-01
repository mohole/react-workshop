export const Footer = (props) => {
  const todos = props.todos || [];

  return (
    <p className="my-4">
      Total done: <span>{todos.filter((todo) => todo.done).length}</span> |
      Total todo: <span>{todos.filter((todo) => !todo.done).length}</span>
    </p>
  );
};
