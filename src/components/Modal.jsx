export const Modal = ({ data, close }) => {

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{data.name}</h3>
          <img src={data.photo} alt={data.title}/>
          <ul className="pt-4">
            <li>Height: <span className="font-bold">{data.height}m</span></li>
            <li>Timing: <span className="font-bold">{data.timing/60}h</span></li>
          </ul>
          <p className="py-4">{data.notes}</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn" onClick={() => close()}>
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
