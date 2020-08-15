import React from "react";

const NoteContent = ({ Note }) => {
  return (
    <pre className="border rounded bg-light p-3">
      {JSON.stringify(Note, null, 2)}
    </pre>
  );
};

export default NoteContent;
