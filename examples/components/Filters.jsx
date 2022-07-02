import { useState } from "react";

/**
 * Initial data
 */
const DATA = [
  { name: "Guinnes", type: "stout", grad: 6 },
  { name: "Moretti", type: "pils", grad: 5 },
  { name: "Chouffe", type: "red", grad: 4 },
  { name: "Poretti", type: "pils", grad: 5 },
  { name: "LA rossa", type: "red", grad: 10 },
  { name: "Una scura", type: "stout", grad: 6 },
  { name: "Birretta", type: "pils", grad: 5 },
];

export const Filters = () => {
  /**
   * Create an internal state from initial data
   */
  const [beers, setBeers] = useState(DATA);
  const [text, setText] = useState("");

  const filterGrad = () => {
    const results = beers.filter((beer) => beer.grad > 5);
    setBeers(results);
  };

  const onChange = (event) => {
    const type = event.target.value;
    const results = DATA.filter((beer) => beer.type === type);
    setBeers(results);
  };

  const onSearch = (event) => {
    const search = event.target.value.toLowerCase();
    const results = DATA.filter((beer) =>
      beer.name.toLowerCase().includes(search)
    );

    setText(search);
    setBeers(results);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-5">Filters</h2>

      <div className="flex gap-5 mb-5">
        <input
          className="border"
          placeholder="filtra per nome"
          value={text}
          onChange={onSearch}
        />

        <select onChange={onChange} className="border">
          <option value="stout">Stout</option>
          <option value="pils">Pils</option>
          <option value="red">Rossa</option>
        </select>

        <button className="border" onClick={filterGrad}>
          Solo quelle sopra i 5°
        </button>

        <button className="border" onClick={() => setBeers(DATA)}>
          Reset
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="border text-left bg-slate-100">
            <th>Name</th>
            <th>Type</th>
            <th>Grad</th>
          </tr>
        </thead>
        <tbody>
          {beers.map((beer, index) => (
            <tr key={index} className="border">
              <td>{beer.name}</td>
              <td>{beer.type}</td>
              <td>{beer.grad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
