import React from "react";

const Pilotos = ({ pilotos }) => {
  return (
    <div className="team-content">
      {pilotos.map((piloto, index) => (
        <div className="pilot" key={index}>
          <a href={piloto.url} target="_blank">
            {piloto.nome}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Pilotos;
