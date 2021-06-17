import React, { useState, useEffect } from "react";
import getBreeds from "../helpers/getBreeds";

const initialBreeds = [
  {
    id: 1,
    name: "¨Romi",
  },
  {
    id: 2,
    name: "Chopin",
  },
];

const Select = () => {
  const [breeds, setBreeds] = useState(initialBreeds);
  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds().then((newbreeds) => {
      setBreeds(newbreeds);
    });
  };
  return (
    <div>
      <select onChange={(e) => updateBreeds(e.target.value)}>
        {breeds.map((val) => {
          return (
            <option value={val.id} key={val.id}>
              {val.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
