export const Todo = (props) => {
  /**
   * Small & easy trick to provide default values for props
   */
  const done = props.done || false;
  const label = props.label || "some text";
  const index = props.index || 0;

  const userClick = () => {
    /**
     * Invoking a function received as a prop from a parent component
     */
    props.changeCallback(index);
  };

  return (
    /**
     * "onChange" acts like -> element.addEventLister('change', callback)
     */
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
