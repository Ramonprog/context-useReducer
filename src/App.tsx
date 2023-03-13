import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import MostrarDados from "./pages/MostrarDados";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Título da página</h1>
      <hr />
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/exibir" element={<MostrarDados />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
