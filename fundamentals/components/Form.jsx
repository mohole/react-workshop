export const Form = (props) => {
  const text = props.text || "";

  return (
    <form onSubmit={props.addItem}>
      <input
        type="text"
        placeholder="Add a new todo"
        className="input input-bordered w-full max-w-xs"
        value={text}
        onChange={(event) => props.setText(event.target.value)}
      />
    </form>
  );
};
