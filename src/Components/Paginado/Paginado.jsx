import React from "react";
import "../Paginado/Paginado.css";

export default function Paginado({ pokePag, allPokemon, paginado, pagAct }) {
  const numDePag = [];

  for (let i = 0; i < Math.ceil(allPokemon / pokePag); i++) {
    numDePag.push(i + 1);
  }

  return (
    <nav>
      {numDePag &&
        numDePag.map((pag) => {
          return (
            <button
              className={pagAct === pag ? "activeButton" : "btn"}
              id={pag}
              value={pag}
              key={pag}
              onClick={() => paginado(pag)}
            >
              {pag}
            </button>
          );
        })}
    </nav>
  );
}
