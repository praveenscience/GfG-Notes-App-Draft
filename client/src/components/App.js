import React, { Component } from "react";
import Header from "./Shared/Header";
import FormGroup from "./Forms/FormGroup";
import Card from "./Card";
import StudentList from "./StudentList";

class App extends Component {
  state = {
    Users: [],
    Form: {
      Name: "",
      Age: "",
      About: ""
    }
  };
  handleFormSubmit = e => {
    e.preventDefault();
    const NewUser = {
      ...this.state.Form
    };
    this.setState({
      Users: [...this.state.Users, NewUser],
      Form: {
        Name: "",
        Age: "",
        About: ""
      }
    });
  };
  handleTextChange = e => {
    this.setState({
      Form: {
        ...this.state.Form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <div className="App">
        <Header dark={true}>Leadstagram</Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <Card
                Title="Enter New Student"
                SubTitle="Enter the information of a new student."
              >
                <form onSubmit={this.handleFormSubmit}>
                  {Object.keys(this.state.Form).map((label, key) => (
                    <FormGroup
                      Id={label}
                      Label={label}
                      key={key}
                      Type="text"
                      LabelSize="3"
                      InputSize="8"
                      OnChange={this.handleTextChange}
                      Value={this.state.Form[label]}
                    />
                  ))}
                  <div className="row">
                    <div className="col-sm-6 offset-3">
                      <input
                        type="submit"
                        className="btn btn-primary w-75"
                        value="Add"
                      />
                    </div>
                  </div>
                </form>
              </Card>
            </div>
            <div className="col-9">
              <Card
                Title="List of Students"
                SubTitle="Here all the students will be displayed."
              >
                <StudentList Users={this.state.Users} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
