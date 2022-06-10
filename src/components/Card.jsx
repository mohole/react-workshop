export const Card = (props) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title text-primary">{props.title} &rarr;</h3>
        <>{props.children}</>
      </div>
    </div>
  );
};
