import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Cadastro = () => {
  const { idade, nome } = useContext(Context);

  return (
    <div>
      olá {nome} voce tem {idade} anos
      <br />
      <button>
        <Link to={"/exibir"}>Ir para Mostrar dados</Link>
      </button>
    </div>
  );
};

export default Cadastro;
