import AnimatedPage from "componentes/Animated/animatedPage";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMin.module.css";
import fotoSobreMin from "assets/sobre_mim_foto.jpg";

export default function SobreMin() {
  return (
    <AnimatedPage>
      <PostModelo fotoCapa={fotoCapa} titulo={"Sobre Min"}>
        <h3 className={styles.subtitulo}>Olá, eu sou o Rafael</h3>
        <img
          src={fotoSobreMin}
          alt="foto do antonio sorrindo"
          className={styles.fotoSobreMim}
        ></img>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          ullamcorper tincidunt scelerisque. Praesent tincidunt facilisis
          cursus. Etiam tempor scelerisque dui in porttitor. Duis dapibus arcu a
          odio fermentum, vel vulputate erat vestibulum. Pellentesque vulputate
          rhoncus neque, ut maximus ante ultrices sed. Vestibulum nibh felis,
          efficitur nec mi nec, tempus dictum justo. Sed accumsan, velit ut
          pretium lacinia, ex nulla aliquam enim, sed lacinia turpis est blandit
          mauris. Sed accumsan neque libero, at interdum sapien scelerisque ac.
          Vivamus pharetra libero id pretium scelerisque. Integer non commodo
          quam. Maecenas ut efficitur urna. Mauris rhoncus sit amet augue vel
          maximus. Donec semper erat ut neque porta, eget rhoncus justo viverra.
          In congue mi ut augue ultrices vulputate.
        </p>
        <p className={styles.paragrafo}>
          Sed pulvinar nisi ligula, tincidunt facilisis leo ullamcorper ut.
          Donec efficitur orci nec egestas blandit. Vivamus egestas efficitur
          augue, vitae mattis erat ultrices in. Pellentesque scelerisque ligula
          non diam cursus, tincidunt ultrices dui convallis. Curabitur ornare
          blandit lorem, non varius tellus faucibus sed. Donec efficitur sed
          justo sed dignissim. Praesent ac tempor augue. Etiam efficitur mauris
          vitae consequat imperdiet. Donec nec est orci. Maecenas ut nisl
          volutpat, facilisis odio sed, eleifend ipsum.
        </p>
        <p className={styles.paragrafo}>
          Vivamus ipsum nibh, pellentesque in consectetur ut, dictum a nunc. Sed
          arcu augue, tincidunt quis vehicula vel, lacinia eget metus. Curabitur
          ac nisl sollicitudin, volutpat turpis quis, volutpat odio. Fusce eget
          porta felis. Donec egestas erat ac ipsum aliquam finibus. Sed feugiat
          porta diam et posuere. Proin id erat sit amet est euismod fringilla.
          In nec arcu nisi. In dapibus ex a odio consectetur, at fringilla
          mauris rhoncus. Sed semper vitae erat vel consequat. Vivamus mauris
          nulla, laoreet et interdum ac, consectetur sit amet justo. Morbi eu
          imperdiet velit.
        </p>
      </PostModelo>
    </AnimatedPage>
  );
}
