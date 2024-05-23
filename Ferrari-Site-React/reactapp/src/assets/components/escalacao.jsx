// escalacao.js
import React, { useState } from "react";
import teams from "../teams";

function Escalacao() {
  const [equipeSelecionada, setEquipeSelecionada] = useState(null);

  const handleChangeEquipe = (equipe) => {
    setEquipeSelecionada(equipe);
  };

  return (
    <div>
      <div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Selecione uma equipe
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {Object.keys(teams).map((equipe, index) => (
              <li key={index}>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleChangeEquipe(equipe)}
                >
                  {teams[equipe].nome}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {equipeSelecionada ? (
            <h3>{teams[equipeSelecionada].nome}</h3>
          ) : (
            <p>Selecione uma equipe</p>
          )}
        </div>
      </div>

      {equipeSelecionada && (
        <div className="menu">
          <h2>Pilotos:</h2>
          {Object.values(teams[equipeSelecionada].pilotos).map(
            (piloto, index) => (
              <div className="pilot" key={index}>
                <a href={piloto.url} target="_blank">
                  {piloto.nome}
                </a>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Escalacao;
