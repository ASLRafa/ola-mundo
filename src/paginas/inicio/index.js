import AnimatedPage from "componentes/Animated/animatedPage";
import Banner from "componentes/Banner";
import styles from "./Inicio.module.css";
import Post from "componentes/Post";

import posts from "json/posts.json";

export default function SobreMin() {
  return (
    <AnimatedPage>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </AnimatedPage>
  );
}
