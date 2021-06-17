import React, { useState } from "react";
import getBreeds from "../helpers/getBreeds";

const initialBreeds = [
  {
    id: 1,
    name: "Boxer",
  },
  {
    id: 2,
    name: "Husky",
  },
];

const Select = () => {
  const [breeds, setBreeds] = useState(initialBreeds);

  const updateBreeds = () => {
    getBreeds().then((newbreeds) => {
      setBreeds(newbreeds);
    });
  };
  return (
    <div>
      <select onChange={(e) => updateBreeds(e.target.value)}>
        {breeds.map((val) => {
          return <option>{val.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
