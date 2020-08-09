import React, { Component } from "react";
import Header from "./Shared/Header";
import Login from "./Login/Login";
import Notes from "./Notes/Notes";
import { AuthenticateUser, LogoutUser } from "../services/AuthService";

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
  handleLogout = () => {
    LogoutUser().then(res => {
      if (res.data === "User successfully logged out.")
        this.setState({
          LoggedIn: false,
          Error: false
        });
    });
  };
  render() {
    return (
      <div className="App">
        <Header dark={true}>Leadstagram</Header>
        {this.state.LoggedIn ? (
          <Notes LoggedIn={this.state.LoggedIn} Logout={this.handleLogout} />
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
