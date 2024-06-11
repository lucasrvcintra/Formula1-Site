//rafce - criar estrutura basica

import React from "react";

const Carros = ({ equipe }) => {
  return (
    <div className="team-content">
      <a href={equipe.carro} target="_blank">
        <img src={equipe.carro} alt="Carro da equipe" />
      </a>
    </div>
  );
};

export default Carros;
