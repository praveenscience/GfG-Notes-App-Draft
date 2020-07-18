import React, { Component } from "react";
import Header from "./Shared/Header";
import { Switch, Route, Link } from "react-router-dom";

const pages = [
  {
    Name: "Home",
    Path: "/home"
  },
  {
    Name: "About",
    Path: "/about"
  },
  {
    Name: "Login",
    Path: "/login"
  },
  {
    Name: "Users",
    Path: "/users",
    Exact: true,
    DontRoute: true
  },
  {
    Name: "User",
    Path: "/users/:userId",
    DontShow: true,
    DontRoute: true
  }
];

const users = [
  "Praveen Kumar",
  "Rohith",
  "Kumar",
  "Kshitij",
  "Jinendra",
  "Kranti",
  "Vikrant"
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true} pages={pages}>
          Leadstagram
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Switch>
                {pages
                  .filter(a => !a.DontRoute)
                  .map((item, key) => (
                    <Route
                      path={item.Path}
                      key={key}
                      exact={item.Exact}
                      render={rp => (
                        <>
                          <h3>{item.Name}</h3>
                          <p>
                            I am in the {item.Name} page provided by{" "}
                            <code>{item.Path}</code>.
                          </p>
                        </>
                      )}
                    />
                  ))}
                <Route
                  path="/users"
                  exact={true}
                  render={() => (
                    <>
                      <h3>List of Users</h3>
                      <div className="list-group">
                        {users.map((item, key) => (
                          <Link
                            key={key}
                            to={"/users/" + key}
                            className="list-group-item list-group-item-action"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                />
                <Route
                  path="/users/:userId"
                  render={({ match, history }) => {
                    const handleBack = () => {
                      history.push("/users");
                    };
                    return (
                      <>
                        <h3>User: {users[match.params.userId]}</h3>
                        <p>
                          I am in the User:{" "}
                          <strong>{users[match.params.userId]}</strong>'s page,
                          who has an id of <code>{match.params.userId}</code>.
                        </p>
                        <button
                          className="btn btn-info btn-sm"
                          onClick={handleBack}
                        >
                          Back to List
                        </button>
                      </>
                    );
                  }}
                />
                <Route>
                  <h3>Error 404</h3>
                  <p>The page you are looking for is not found.</p>
                </Route>
              </Switch>
              <p>This will be visible always! :)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
