import React from "react";

const Card = ({updateDog }) => {
  return (
    <div className="card">
      <img onClick={() => updateDog()} src={} alt="dog" />
      <p>{}</p>
    </div>
  );
};

export default Card;
