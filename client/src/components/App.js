import React, { Component } from "react";
import Header from "./Shared/Header";

class App extends Component {
  state = {
    LoggedIn: false
  };
  render() {
    return (
      <div className="App">
        <Header dark={true}>Leadstagram</Header>
        {this.state.LoggedIn ? <p>Show Notes</p> : <p>Show Login</p>}
      </div>
    );
  }
}

export default App;
