import { Link } from "react-router-dom";

export const Card = (props) => {
  /**
   * Fallback value
   */
  const item = props.item || {
    photo: "",
    name: "N/A",
    notes: "en error occured",
    timing: 0,
    height: 0,
  };

  const noAction = props.noAction || false;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="min-h-[220px] bg-slate-100">
        <img src={item.photo} alt={item.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <ul>
          <li>
            Height: <span className="font-bold">{item.height} meters</span>
          </li>
          <li>
            Duration:{" "}
            <span className="font-bold">{item.timing / 60} hours</span>
          </li>
        </ul>
        <p>{item.notes}</p>
        {!noAction && (
          <div className="card-actions">
            <Link
              to={"/excursion/" + item.id}
              className="btn btn-primary btn-block"
            >
              View/Edit
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
