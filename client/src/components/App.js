import React, { Component } from "react";
import Header from "./Shared/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true}>Leadstagram</Header>
      </div>
    );
  }
}

export default App;
