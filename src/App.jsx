import { useEffect, useState } from "react";

import { GET } from "./utils/http";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
import { Card } from "./components/Card";

function App() {
  /**
   * Define a getter and a setter internal states
   */
  const [items, setItems] = useState([]);
  const [current, setCurrent] = useState({})

  useEffect(() => {
    const getData = async () => {
      const data = await GET();
      const mock = new Array(9).fill(data[0])
      setItems(mock);
    };
    getData();
  }, []);

  const selected = (uuid) => {
    const results = items.filter((item) => item.uuid === uuid);
    setCurrent(results[0])
  }

  const close = () => setCurrent({});

  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 md:px-0">
        <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => (
            <li key={index}>
              <Card 
                title={item.name} 
                photo={item.photo} 
                uuid={item.uuid}
                selected={selected}
              >{item.notes}</Card>
            </li>
          ))}
        </ul>
        <div className="my-10">
          <button className="btn btn-success w-full">Add a new entry</button>
        </div>
        <Modal close={close} data={current} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
