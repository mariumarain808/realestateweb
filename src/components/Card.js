import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={props.image}
        alt={props.title}
        style={{ width: "200px", height: "150px", objectFit: "cover" }}
      />
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}
