import React from "react";

export const Local = ({ title, sedes }) => {
  return (
    <div className="locals__container__city__lima__district">
      <p> {title} </p>
      {sedes.map((sede) => (
        <a href="">{sede}</a>
      ))}
    </div>
  );
};
