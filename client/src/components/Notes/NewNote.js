import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { withRouter } from "react-router-dom";

const NewNote = ({ LoggedIn, CreateNote, history }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("*Start writing your note...*");
  const [priv, setPriv] = useState(false);
  const [Saved, setSaved] = useState(false);
  const handleCreateNote = e => {
    e.preventDefault();
    CreateNote({
      title,
      content,
      private: priv
    });
    setSaved(true);
  };
  if (Saved) {
    history.push("/");
  }
  return (
    <section className={"NotesContainer-Content" + (priv ? " private" : "")}>
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
            Creating right now by <em>{LoggedIn.username}</em>...
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
        <button className="btn btn-primary" onClick={handleCreateNote}>
          Create
        </button>
      </div>
    </section>
  );
};

export default withRouter(NewNote);
