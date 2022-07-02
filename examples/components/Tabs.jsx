import { useState } from "react";

export const Tabs = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      <h2 className="text-2xl font-bold mb-5">Tabs</h2>

      <button
        onClick={() => setActive(1)}
        className={active === 1 ? "bg-red-500" : ""}
      >
        Tab 1
      </button>
      <button
        onClick={() => setActive(2)}
        className={active === 2 ? "bg-red-500" : ""}
      >
        Tab 2
      </button>

      {active === 1 && (
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
      )}
      {active === 2 && (
        <p>
          Quod eum in rem doloremque facere quam laboriosam ratione ab porro.
        </p>
      )}
    </>
  );
};
