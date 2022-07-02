import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ENDPOINT } from "../libs/const";

const initialState = {
  name: "",
  height: 1000,
  photo: "",
  timing: 30,
  notes: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_HEIGHT":
      const height = parseInt(action.payload);
      return { ...state, height };
    case "UPDATE_PHOTO":
      return { ...state, photo: action.payload };
    case "UPDATE_NOTES":
      return { ...state, notes: action.payload };
    case "UPDATE_TIMING":
      const timing = parseInt(action.payload);
      return { ...state, timing };
  }
};

export const Add = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const postData = (event) => {
    event.preventDefault();
    fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => navigate("/"));
  };

  return (
    <main className="p-3">
      <h2 className="text-3xl font-bold">Add a new activity</h2>
      <form className="my-3" onSubmit={postData}>
        <label className="mt-5 block">Excursion name:</label>
        <input
          type="text"
          placeholder="ex: Mount Nowhere"
          className="input input-bordered w-full"
          value={state.name}
          onChange={(event) =>
            dispatch({
              type: "UPDATE_NAME",
              payload: event.target.value,
            })
          }
        />
        <label className="mt-5 block">Top height (meters):</label>
        <input
          type="number"
          min="500"
          max="4000"
          step="50"
          value={state.height}
          className="input input-bordered w-full"
          onChange={(event) =>
            dispatch({
              type: "UPDATE_HEIGHT",
              payload: event.target.value,
            })
          }
        />
        <label className="mt-5 block">Photo (url):</label>
        <input
          type="text"
          value={state.photo}
          placeholder="ex: https://picsum.photos/id/15/1024/768.webp"
          className="input input-bordered w-full"
          onChange={(event) =>
            dispatch({
              type: "UPDATE_PHOTO",
              payload: event.target.value,
            })
          }
        />
        <label className="mt-5 block">Excursion duration (minutes):</label>
        <input
          type="number"
          min="30"
          step="1"
          value={state.timing}
          className="input input-bordered w-full"
          onChange={(event) =>
            dispatch({
              type: "UPDATE_TIMING",
              payload: event.target.value,
            })
          }
        />
        <label className="mt-5 block">Notes:</label>
        <textarea
          value={state.notes}
          className="textarea textarea-bordered w-full"
          onChange={(event) =>
            dispatch({
              type: "UPDATE_NOTES",
              payload: event.target.value,
            })
          }
        ></textarea>

        <button className="btn btn-primary btn-block mt-5">
          Add to the database
        </button>
      </form>
      <Link to="/" className="btn btn-block">
        Go back to the dashboard
      </Link>
    </main>
  );
};
