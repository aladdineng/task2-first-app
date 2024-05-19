import React from "react";

const Cards = ({ image, name, price }) => {
  return (
    <div
      style={{
        border: "2px black solid",
        height: "300px",
        width: "200px",
      }}
    >
      <img style={{ width: "200px", height: "200px" }} src={image}></img>

      <div style={{ textAlign: "center" }}>
        <h5>{name}</h5>
        <h2>{price}</h2>
      </div>
    </div>
  );
};

export default Cards;
