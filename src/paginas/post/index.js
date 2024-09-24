import { useParams, Route, Routes } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import "./post.css";
import { AnimatedPagePost } from "componentes/Animated/animatedPage";
import NaoEncontrada from "paginas/naoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

export default function Post() {
  const parametros = useParams();
  const listaFiltrada = posts.filter(
    (post) => post.id !== Number(parametros.id)
  );

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });
  if (!post) {
    return <NaoEncontrada></NaoEncontrada>;
  }
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <AnimatedPagePost>
              <div>
                <PostModelo
                  fotoCapa={`/assets/posts/${post.id}/capa.png`}
                  titulo={post.titulo}
                >
                  <div className="post-markdown-container">
                    <ReactMarkdown>{post.texto}</ReactMarkdown>
                    <h2 className="subtitulo"> Veja esses outros Posts </h2>
                    <ul className="posts">
                      {listaFiltrada.slice(0, 4).map((post) => {
                        return (
                          <li key={post.id}>
                            <PostCard post={post} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </PostModelo>
              </div>
            </AnimatedPagePost>
          }
        ></Route>
      </Route>
    </Routes>
  );
}
