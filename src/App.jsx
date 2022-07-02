import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Dashboard } from "./pages/Dashboard";
import { Add } from "./pages/Add";
import { Detail } from "./pages/Detail";

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="add" element={<Add />} />
          <Route path="excursion/:id" element={<Detail />} />
          <Route path="*" element={<p>Page not found!</p>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
