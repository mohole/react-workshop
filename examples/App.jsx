import { Routes, Route, NavLink } from "react-router-dom";

import { Tabs } from "./components/Tabs";
import { Filters } from "./components/Filters";

const App = () => {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-10">Mohole examples</h1>
      <Tabs />
      <hr className="my-8" />

      <h2 className="text-2xl font-bold mb-5">"Tabs" with routing</h2>
      <NavLink
        to="/pag1"
        className={({ isActive }) => (isActive ? "bg-red-500" : undefined)}
      >
        Vai alla pagina 1
      </NavLink>
      <NavLink
        to="/pag2"
        className={({ isActive }) => (isActive ? "bg-red-500" : undefined)}
      >
        Vai alla pagina 2
      </NavLink>
      <Routes>
        <Route path="pag1" element={<p>Pagina 1</p>} />
        <Route path="pag2" element={<p>Pagina 2</p>} />
      </Routes>

      <hr className="my-8" />
      <Filters />
    </main>
  );
};

export default App;
