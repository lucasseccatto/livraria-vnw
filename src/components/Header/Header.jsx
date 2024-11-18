import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inicio from "../../pages/inicio/Inicio";
import LivrosDoados from "../../pages/livrosDoados/LivrosDoados";
import QueroDoar from "../../pages/queroDoar/QueroDoar";

import Logo from "../../assets/logo-livro.png";
import Lupa from "../../assets/lupa-header.png";

import s from "./header.module.scss";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section className={s.logoHeader}>
          <img
            src={Logo}
            alt="Imagem de uma ilustração de um livro aberto, com páginas brancas e capa azul."
          />
          <h1>Livros Vai na Web</h1>
        </section>

        <nav className={s.navHeader}>
          <ul>
            <li>
              <Link className={s.link} to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className={s.link} to="livros-doados">
                Livros Doados
              </Link>
            </li>
            <li>
              <Link className={s.link} to="quero-doar">
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>

        <section className={s.barraDeBusca}>
          <input
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />

          <button>
            <img src={Lupa} alt="Imagem de uma lupa branca." />
          </button>
        </section>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livros-doados" element={<LivrosDoados />} />
        <Route path="/quero-doar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
