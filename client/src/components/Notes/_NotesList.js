import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import NotesContainer from "./_NotesContainer";

const NotesList = ({ Notes, LoggedIn }) => {
  const [Mine, setMine] = useState(false);
  const urm = useRouteMatch();
  Notes =
    Notes.map &&
    Notes.map((note, NoteID) => ({ ...note, NoteID })).filter(note =>
      Mine ? note.username === LoggedIn.username : true
    );
  return (
    <>
      <div className="btn-group mb-3">
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
      <div className="list-group">
        {Notes.length > 0 ? (
          Notes.map((note, key) => (
            <Link
              to={"/note-" + note.NoteID}
              className="list-group-item list-group-item-action"
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
