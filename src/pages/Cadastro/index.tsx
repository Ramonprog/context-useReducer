import React from "react";
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
    <div>
      tela de cadastro
      <br />
      <button>
        <Link to={"/exibir"}>Ir para Mostrar dados</Link>
      </button>
    </div>
  );
};

export default Cadastro;
