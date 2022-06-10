import { useEffect, useState } from "react";

import { GET } from "./utils/http";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
import { Card } from "./components/Card";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await GET();
      setItems(data);
    };
    getData();
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <ul>
          {items.map((item) => (
            <li key={item.uuid}>
              <Card title={item.name}>prova</Card>
            </li>
          ))}
        </ul>

        <Modal>bella zio</Modal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
