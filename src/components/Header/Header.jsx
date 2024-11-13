import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Logo from "../../assets/logo-livro.png";
import Lupa from "../../assets/lupa-header.png";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section>
          <img
            src={Logo}
            alt="Imagem de uma ilustração de um livro aberto, com páginas brancas e capa azul."
          />
          <h1>Livros Vai na Web</h1>
        </section>

        <nav>
          <ul>
            <li>
              <Link>Início</Link>
            </li>
            <li>
              <Link>Livros Doados</Link>
            </li>
            <li>
              <Link>Quero Doar</Link>
            </li>
          </ul>
        </nav>

        <section>
          <input
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
        </section>
        <button>
          <img src={Lupa} alt="Imagem de uma lupa branca." />
        </button>
      </header>

      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}
