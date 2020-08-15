import React from "react";
import NotesList from "./_NotesList";

const NotesSidebar = ({ Notes }) => {
  return (
    <div className="col-2">
      {Notes && Notes.length > 0 ? (
        <NotesList Notes={Notes} />
      ) : (
        <div className="alert alert-info">
          No notes found. Please create one.
        </div>
      )}
    </div>
  );
};

export default NotesSidebar;
