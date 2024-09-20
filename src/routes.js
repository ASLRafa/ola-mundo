import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMin from "./paginas/Sobremin";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="*" element={<Inicio />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremin" element={<SobreMin />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
