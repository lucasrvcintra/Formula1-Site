import React, { useState } from "react";
import teams from "../teams";
import "./escalacao.css";
import Carros from "./carros";
import Pilotos from "./pilotos";

const Escalacao = () => {
  const [equipeSelecionada, setEquipeSelecionada] = useState(null);

  const handleChangeEquipe = (equipe) => {
    setEquipeSelecionada(equipe);
  };

  return (
    <div>
      <div>
        <div className="dropdown flex flex-row justify-center items-center mt-5">
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
          <div className="title flex flex-col  items-start flex-wrap">
            <h2>Pilotos:</h2>
          </div>
          <Pilotos pilotos={Object.values(teams[equipeSelecionada].pilotos)} />
          <div className="title flex flex-col  items-start flex-wrap">
            <h2>Carro:</h2>
          </div>

          <Carros equipe={teams[equipeSelecionada]} />
        </div>
      )}
    </div>
  );
};

export default Escalacao;
