import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import NotesContainer from "./_NotesContainer";

const NotesList = ({ Notes, LoggedIn }) => {
  const [Mine, setMine] = useState(false);
  const urm = useRouteMatch();
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
        {Notes.map &&
          Notes.map((note, NoteID) => ({ ...note, NoteID }))
            .filter(note => (Mine ? note.username === LoggedIn.username : true))
            .map((note, key) => (
              <Link
                to={"/note-" + note.NoteID}
                className="list-group-item list-group-item-action"
                key={key}
              >
                {note.title}
              </Link>
            ))}
      </div>
    </>
  );
};

export default NotesList;
