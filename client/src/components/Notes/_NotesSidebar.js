import React from "react";

const NotesSidebar = ({ Notes }) => {
  return (
    <div className="col-2">
      <pre className="border rounded bg-light p-2">
        {JSON.stringify(Notes, null, 2)}
      </pre>
    </div>
  );
};

export default NotesSidebar;
