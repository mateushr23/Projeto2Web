import React, { Component } from "react";
import axios from 'axios';



export class Home extends Component {

  constructor(props) {
    super(props);
    this.data = "";
  }

  async getData() {
    const response =
      await axios.get("https://swapi.dev/api/people/?search=" + this.data);
    document.getElementById("lista-nomes").innerHTML = "";
    for (var i = 0; i < response.data.results.length; i++) {
      document.getElementById("lista-nomes").innerHTML += "<br> <div class='fundinho-bonito'>" + response.data.results[i].name + "</div>";
    }
  }

  handleSearch = () => {
    this.getData();
  }

  render() {

    return (
      <div>
        <main>
          <div class="grey">
            <div class="submit-line">
              <input class="pesquisa" id="search-input" placeholder="Buscar" type="text" onChange={(text) => this.data = text.target.value} />
              <button class="submit-lente" onClick={() => this.handleSearch()}>
                <i class="fa fa-search"></i>
              </button>
            </div>
            <div class="coluna">
              <ul id="lista-nomes">

              </ul>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
