import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const NotesList = ({ Notes, LoggedIn }) => {
  const [Mine, setMine] = useState(false);
  const urm = useRouteMatch();
  Notes =
    Notes.filter &&
    Notes.filter(note => (Mine ? note.username === LoggedIn.username : true));
  return (
    <>
      <div className="btn-group mb-3 mr-2">
        <button
          className={"btn btn-sm btn-primary" + (Mine ? "" : " active")}
          onClick={e => {
            e.preventDefault();
            setMine(false);
          }}
        >
          Home
        </button>
        <button
          className={"btn btn-sm btn-primary" + (Mine ? " active" : "")}
          onClick={e => {
            e.preventDefault();
            setMine(true);
          }}
        >
          My Notes
        </button>
      </div>
      <Link to="/new" className="btn btn-sm btn-primary mb-3">
        New
      </Link>
      <div className="list-group">
        {Notes.length > 0 ? (
          Notes.map((note, key) => (
            <Link
              to={"/note-" + note.noteid}
              className={
                "list-group-item list-group-item-action" +
                ("/note-" + note.noteid === urm.url ? " active" : "") +
                (note.private ? " list-group-item-info" : "")
              }
              key={key}
            >
              {note.title}
            </Link>
          ))
        ) : (
          <div className="alert alert-info">
            You haven't created any notes yet. Please create one.
          </div>
        )}
      </div>
    </>
  );
};

export default NotesList;
