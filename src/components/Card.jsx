export const Card = (props) => {
  /**
   * This method is just a wrapper for the "selected" method received from the parent component
   */
  const selected = () => {
    props.selected(props.uuid);
    console.log(props.uuid);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title text-primary">{props.title} &rarr;</h3>
        <img src={props.photo} alt={props.title} />
        <>{props.children}</>
        <label
          htmlFor="my-modal"
          className="btn modal-button btn-sm"
          onClick={selected}
        >
          view details
        </label>
      </div>
    </div>
  );
};
