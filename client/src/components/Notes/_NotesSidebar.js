import React from "react";
import NotesList from "./_NotesList";

const NotesSidebar = ({ Notes, LoggedIn }) => {
  return (
    <div className="col-2">
      {Notes && Notes.length > 0 ? (
        <NotesList Notes={Notes} LoggedIn={LoggedIn} />
      ) : (
        <div className="alert alert-info">
          No notes found. Please create one.
        </div>
      )}
    </div>
  );
};

export default NotesSidebar;
