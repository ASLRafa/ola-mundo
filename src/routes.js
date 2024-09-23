import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMin from "./paginas/Sobremin";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="*" element={<Inicio />} />
          <Route index element={<Inicio />} />
          <Route path="sobremin" element={<SobreMin />} />
        </Route>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
