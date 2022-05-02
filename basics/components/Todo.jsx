export const Todo = (props) => {
  const done = props.done || false;
  const label = props.label || "some text";
  const index = props.index || 0;

  const userClick = () => {
    props.changeCallback(index);
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-neutral-500 my-3">
      <div className="p-2">
        <label className="label cursor-pointer justify-start gap-3">
          <input
            type="checkbox"
            checked={done}
            className="checkbox"
            onChange={userClick}
          />
          <span className={`label-text ${done ? "line-through" : ""}`}>
            {label}
          </span>
        </label>
      </div>
    </div>
  );
};
