import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { ENDPOINT } from "../libs/const";
import { Card } from "../components/Card";

export const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [excursion, setExcursion] = useState({});

  useEffect(() => {
    fetch(ENDPOINT + params.id)
      .then((response) => response.json())
      .then((data) => setExcursion(data));
  }, []);

  const destroy = () => {
    fetch(ENDPOINT + params.id, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };

  return (
    <main className="px-4 py-6">
      <h2 className="text-3xl font-bold mb-3">Excursion details</h2>

      <Card item={excursion} noAction={true} />

      <div className="grid gap-5 mt-5">
        <Link to="/" className="btn btn-block">
          Go back to the dashboard
        </Link>
        <button className="btn btn-accent btn-block" onClick={destroy}>
          Delete excursion
        </button>
      </div>
    </main>
  );
};
