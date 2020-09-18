import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../../store/actions/busca.actions";
import Header from "./Header";
import Home from "./Home";

export class Dashboard extends Component {
  getItems = () => {};

  render() {
    let token = localStorage.getItem("access_token");
    if (!token) {
      window.location.replace("/");
    }

    return (
      token && (
        <div>
          <Header />
          <Home />
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({
  item: (texto) => dispatch(getItems(texto)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
