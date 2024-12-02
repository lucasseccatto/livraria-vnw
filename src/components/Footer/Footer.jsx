import s from "./footer.module.scss";

import logoFacebook from "../../assets/logo-facebook.png";
import logoX from "../../assets/logo-x.png";
import logoYoutube from "../../assets/logo-youtube.png";
import logoLinkedin from "../../assets/logo-linkedin.png";
import logoInstagram from "../../assets/logo-instagram.png";

export default function Footer() {
  return (
    <footer>
      <section className={s.contatosFooter}>
        <p>4002-8922</p>

        <nav>
          <a href="#">
            <img
              src={logoFacebook}
              alt="Imagem ilustrando a logo do Facebook."
            />
          </a>

          <a href="#">
            <img src={logoX} alt="Imagem ilustrando a logo da plataforma X." />
          </a>

          <a href="#">
            <img src={logoYoutube} alt="Imagem ilustrando a logo do Youtube." />
          </a>

          <a href="#">
            <img
              src={logoLinkedin}
              alt="Imagem ilustrando a logo do Linkedin."
            />
          </a>

          <a href="#">
            <img
              src={logoInstagram}
              alt="Imagem ilustrando a logo do Instagram."
            />
          </a>
        </nav>
      </section>

      <section className={s.copyright}>
        <p>Layout desenvolvido pela Vai na Web para fins educativos - 2024</p>
      </section>
    </footer>
  );
}
