import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Card } from "../components/Card";
import { ENDPOINT } from "../libs/const";

export const Dashboard = () => {
  const [items, setItems] = useState([]);

  /**
   * Fetch request starts at component "mount" event
   *
   */
  useEffect(() => {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <main className="px-4 py-6">
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item, index) => (
          <li key={index}>
            <Card item={item} />
          </li>
        ))}
      </ul>
      <Link to="/add" className="mt-7 btn btn-primary btn-lg btn-block">
        Add activity
      </Link>
    </main>
  );
};
