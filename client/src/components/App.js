import React, { Component } from "react";
import Header from "./Shared/Header";
import { GetUsers } from "../services/UserService";

class App extends Component {
  state = {
    Data: [],
    Loading: false
  };
  componentDidMount() {
    this.setState({ Loading: true });
    setTimeout(() => {
      GetUsers().then(Data => this.setState({ Data, Loading: false }));
    }, 1000);
  }
  handleReload = e => {
    e.preventDefault();
    this.setState({ Loading: true, Data: [] });
    setTimeout(() => {
      GetUsers().then(Data => this.setState({ Data, Loading: false }));
    }, 1000);
  };
  render() {
    return (
      <div className="App">
        <Header dark={true}>Leadstagram</Header>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <button className="btn btn-primary" onClick={this.handleReload}>
                Refresh
              </button>
              {this.state.Loading && (
                <img src="https://i.imgur.com/kBXGOgw.gif" alt="Loading..." />
              )}
              <ul className="list-group">
                {this.state.Data.length > 0 ? (
                  this.state.Data.map &&
                  this.state.Data.map?.((item, key) => (
                    <li className="list-group-item" key={key}>
                      <pre>{JSON.stringify(item, null, 2)}</pre>
                    </li>
                  ))
                ) : (
                  <li className="list-group-item">Data is Not There...</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
