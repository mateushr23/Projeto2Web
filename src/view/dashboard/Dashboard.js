import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";

export class Dashboard extends Component {
  render() {
    const { token } = this.props;

    if(!token) {
        window.location.replace("/");
    }

    return token && (
      <div>
        <Container component="main" maxWidth="xs">
        ALKSDLÇKASÇLDKLAÇKSÇLKDLAKSDALSÇKD
        ALKSDLÇKASÇLDKLAÇKSÇLKDLAKSDALSÇKD
        ALKSDLÇKASÇLDKLAÇKSÇLKDLAKSDALSÇKD
        ALKSDLÇKASÇLDKLAÇKSÇLKDLAKSDALSÇKD
        ALKSDLÇKASÇLDKLAÇKSÇLKDLAKSDALSÇKD
        ALKSDLÇKASÇLDKLAÇKSÇLKDLAKSDALSÇKD
        ALKSDLÇKASÇLDKLAÇKSÇLKDLAKSDALSÇKD
        ALKSDLÇKASÇLDKLAÇKSÇLKDLAKSDALSÇKD

        ALKSDLÇKASÇLDKLAÇKSÇLKDLAKSDALSÇKD
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // credentials: state.authReducer.credentials,
  // success: state.authReducer.success,
});

const mapDispatchToProps = (dispatch) => ({
  // login: (credentials) => dispatch(login(credentials)),
  // changeValue: (value) => dispatch(changeValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
