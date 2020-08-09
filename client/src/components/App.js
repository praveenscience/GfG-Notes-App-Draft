import React, { Component } from "react";
import Header from "./Shared/Header";
import Login from "./Login/Login";
import { AuthenticateUser } from "../services/AuthService";

class App extends Component {
  state = {
    LoggedIn: false,
    Error: false
  };
  handleAuthentication = cred => {
    AuthenticateUser(cred)
      .then(res => {
        this.setState({
          LoggedIn: res.data,
          Error: false
        });
      })
      .catch(() => {
        this.setState({
          LoggedIn: false,
          Error: true
        });
      });
  };
  render() {
    return (
      <div className="App">
        <Header dark={true}>Leadstagram</Header>
        {this.state.LoggedIn ? (
          <p>Show Notes</p>
        ) : (
          <Login
            handleAuthentication={this.handleAuthentication}
            Error={this.state.Error}
          />
        )}
      </div>
    );
  }
}

export default App;
