import React, { Component } from "react";
import { GetAllNotes } from "../../services/NotesService";
import WelcomeHeader from "./_WelcomeHeader";
import NotesSidebar from "./_NotesSidebar";
import NotesContainer from "./_NotesContainer";

class Notes extends Component {
  state = {
    Notes: []
  };
  componentDidMount() {
    GetAllNotes().then(res => {
      if (res.status === 200) {
        this.setState({
          Notes: res.data
        });
      }
    });
  }
  render() {
    const { LoggedIn, Logout } = this.props;
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <WelcomeHeader LoggedIn={LoggedIn} Logout={Logout} />
              <div className="card-body">
                <div className="row">
                  <NotesSidebar Notes={this.state.Notes} />
                  <NotesContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
