import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header class="cabeçalho">
          <nav>
            <div class="dropdown-semmenu">
              <button class="dropbtn-semmenu">QUEM SOMOS</button>
            </div>

            <div class="dropdown">
              <button class="dropbtn">PRODUTOS</button>

              <div class="dropdown-content-laranja">
                <a href="/#">PEGUE E LEVE</a>
              </div>

              <div class="dropdown-content">
                <a href="/#">ACESSÓRIOS</a>
                <a href="/#">CAFETERIA</a>
                <a href="/#">DIET</a>
                <a href="/#">DINDA</a>
                <a href="/#">INFANTIL</a>
                <a href="/#">PÁSCOA</a>
                <a href="/#">PRESENTES</a>
                <a href="/#">TABLETES</a>
                <a href="/#">TRUFAS</a>
                <a href="/#">VARIEDADES</a>
              </div>
            </div>

            <div class="dropdown-semmenu">
              <button class="dropbtn-semmenu">CONTATO</button>
            </div>

            <div class="dropdown-semmenu">
              <button class="dropbtn-semmenu">LOJAS</button>
            </div>

            <div class="dropdown-rosa">
              <button class="dropbtn-rosa">SEJA FRANQUEADO</button>
            </div>

            <div class="dropdown-busca">
              <button class="dropbtn-busca">Buscar...</button>
            </div>


            <div class="cacaumobile">
              <img
                src="assets/Images/cacaumobile.svg"
                alt="Chocolates Brasil Cacau"
              ></img>
            </div>

            <div class="menumobile">
              <img src="assets/Images/menu.jpg" alt="Menu"></img>
            </div>

            <div class="contato">
              <img src="assets/Images/contato.png" alt="Torne-se um franqueado"></img>
            </div>

            <div class="insta-icon">
              <img src="assets/Images/instagram.png" alt="Instagram"></img>
            </div>

            <div class="fb-icon">
              <img src="assets/Images/facebook.png" alt="Facebook"></img>
            </div>

            <div class="yt-icon">
              <img src="assets/Images/yt.png" alt="Youtube"></img>
            </div>

            <div class="share-icon">
              <img src="assets/Images/share.jpg" alt="Compartilhar"></img>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
