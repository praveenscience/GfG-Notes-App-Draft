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
      </div>
    );
  }
}

export default App;
