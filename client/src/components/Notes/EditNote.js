import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const EditNote = ({ LoggedIn, Note, UpdateNote }) => {
  const [title, setTitle] = useState(Note.title);
  const [content, setContent] = useState(Note.content);
  const [priv, setPriv] = useState(Note.private);
  const [Saved, setSaved] = useState(false);
  const handleUpdateNote = e => {
    e.preventDefault();
    UpdateNote(Note.noteid, {
      title,
      content,
      private: priv
    });
    setSaved(true);
  };
  return (
    <section className={"NotesContainer-Content" + (priv ? " private" : "")}>
      {Saved && (
        <div className="alert alert-success text-center">
          Note Saved Successfully!
        </div>
      )}
      <header>
        <h3>
          <input
            type="text"
            placeholder="Note Title"
            value={title}
            className="border-0 w-75"
            onChange={e => setTitle(e.target.value)}
          />
        </h3>
        <div className="Author">
          <p>
            Editing right now by <em>{LoggedIn.username}</em>...
            <label className="float-right">
              <input
                type="checkbox"
                checked={priv}
                className="border mr-1 rounded"
                onChange={e => setPriv(e.target.checked)}
              />
              Private
            </label>
          </p>
        </div>
      </header>
      <article className="border rounded p-3">
        <MDEditor value={content} onChange={setContent} />
      </article>
      <div className="text-right mt-3">
        <button className="btn btn-primary" onClick={handleUpdateNote}>
          Update
        </button>
      </div>
    </section>
  );
};

export default EditNote;
