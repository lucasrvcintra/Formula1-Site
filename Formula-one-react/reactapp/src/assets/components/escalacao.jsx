import React, { useState } from "react";
import teams from "../teams";
import "./escalacao.css";

function Escalacao() {
  const [equipeSelecionada, setEquipeSelecionada] = useState(null);

  const handleChangeEquipe = (equipe) => {
    setEquipeSelecionada(equipe);
  };

  return (
    <div>
      <div>
        <div className="dropdown dropdown-position">
          <button
            className="btn dropdown-toggle botao"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {equipeSelecionada
              ? teams[equipeSelecionada].nome
              : "Selecione uma equipe"}
          </button>
          <ul
            className="dropdown-menu bg-dark"
            aria-labelledby="dropdownMenuButton"
          >
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
      </div>

      {equipeSelecionada && (
        <div className="menu">
          <div className="pilot-title">
            <h2>Pilotos:</h2>
          </div>
          <div className="pilotos">
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
        </div>
      )}
    </div>
  );
}

export default Escalacao;
