import React from "react";
import { useRouteMatch } from "react-router-dom";

const NotesContainer = () => {
  const urm = useRouteMatch();
  return (
    <div className="col-10">
      <p>
        {urm.path === "/"
          ? "You're in the home page."
          : "You're in " + urm.params.NoteID}
      </p>
    </div>
  );
};

export default NotesContainer;
