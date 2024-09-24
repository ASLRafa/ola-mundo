import { useParams, Route, Routes } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import "./post.css";
import { AnimatedPagePost } from "componentes/Animated/animatedPage";
import NaoEncontrada from "paginas/naoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";

export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });
  if (!post) {
    return <NaoEncontrada></NaoEncontrada>;
  }
  return (
    <AnimatedPagePost>
      <Routes>
        <Route path="*" element={<PaginaPadrao />}>
          <Route
            index
            element={
              <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
              >
                <div className="post-markdown-container">
                  <ReactMarkdown>{post.texto}</ReactMarkdown>
                </div>
              </PostModelo>
            }
          ></Route>
        </Route>
      </Routes>
    </AnimatedPagePost>
  );
}
