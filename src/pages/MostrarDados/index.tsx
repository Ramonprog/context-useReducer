import { Link } from "react-router-dom";

const MostrarDados = () => {
  return (
    <div>
      Mostrar dados
      <br />
      <button>
        <Link to={"/"}>Voltar para cadastro</Link>
      </button>
    </div>
  );
};

export default MostrarDados;
