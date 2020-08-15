import React from "react";
import { Link } from "react-router-dom";

const NotesList = ({ Notes }) => {
  return (
    <div className="list-group">
      {Notes.map &&
        Notes.map((note, key) => (
          <Link
            to={"/note-" + key}
            className="list-group-item list-group-item-action"
            key={key}
          >
            {note.title}
          </Link>
        ))}
    </div>
  );
};

export default NotesList;
