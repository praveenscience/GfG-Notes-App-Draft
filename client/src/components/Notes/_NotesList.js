import React from "react";

const NotesList = ({ Notes }) => {
  return (
    <div className="list-group">
      {Notes.map &&
        Notes.map((note, key) => (
          <span className="list-group-item list-group-item-action" key={key}>
            {note.title}
          </span>
        ))}
    </div>
  );
};

export default NotesList;
