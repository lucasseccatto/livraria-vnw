import livroProtagonista from "../../assets/livro-protagonista.png";
import s from "./livrosDoados.module.scss";

export default function LivrosDoados() {
  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>

      <sectionc className={s.containerCards}>
        <section>
          <img
            src={livroProtagonista}
            alt="Imagem do livro 'O Protagonista'."
          />
          <div>
            <h3>O Protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </div>
        </section>
      </sectionc>
    </section>
  );
}
