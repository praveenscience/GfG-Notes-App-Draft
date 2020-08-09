import React, { Component } from "react";
import Header from "./Shared/Header";
import Login from "./Login/Login";

class App extends Component {
  state = {
    LoggedIn: false
  };
  render() {
    return (
      <div className="App">
        <Header dark={true}>Leadstagram</Header>
        {this.state.LoggedIn ? <p>Show Notes</p> : <Login />}
      </div>
    );
  }
}

export default App;
