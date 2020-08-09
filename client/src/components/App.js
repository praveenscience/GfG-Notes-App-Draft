import React, { Component } from "react";
import Header from "./Shared/Header";
import Login from "./Login/Login";

class App extends Component {
  state = {
    LoggedIn: false,
    Error: false
  };
  handleAuthentication = formData => {
    const { username, password } = formData;
    // Login auth logic.
    if (username === password) {
      this.setState({ LoggedIn: formData, Error: false });
    } else {
      this.setState({ LoggedIn: false, Error: true });
    }
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
