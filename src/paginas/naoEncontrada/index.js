import styles from "./NaoEncontrada.module.css";
import erro404 from "assets/erro_404.png";

export default function NaoEncontrada() {
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>Tem certeza que o endereço é este?</p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes ou retorne a pagina inicial
        </p>
        <div className={styles.botaoContainer}>
          <button>Voltar</button>
        </div>
        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="cachorro de oculos e vestido com roupas"
        ></img>
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
}
