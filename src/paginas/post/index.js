import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import "./post.css";
import { AnimatedPagePost } from "componentes/Animated/animatedPage";

export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });
  if (!post) {
    return <h1>Post não encontrado...</h1>;
  }
  return (
    <AnimatedPagePost>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
      </PostModelo>
    </AnimatedPagePost>
  );
}
