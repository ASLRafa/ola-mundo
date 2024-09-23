import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMin from "./paginas/Sobremin";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/post";
import NaoEncontrada from "paginas/naoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremin" element={<SobreMin />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<NaoEncontrada></NaoEncontrada>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
