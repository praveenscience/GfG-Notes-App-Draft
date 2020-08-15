import React from "react";

/*
{
  "username": "Praveen",
  "title": "First Note",
  "content": "GfG Classes are going to end!",
  "private": false,
  "editCount": 0,
  "createdAt": "2020-08-15T15:16:50.936Z",
  "updatedAt": "2020-08-15T15:16:50.936Z"
}
*/

const NoteContent = ({ Note }) => {
  return (
    <section className="NotesContainer-Content">
      <header>
        <h3>{Note.title}</h3>
        <div className="Author">
          <p>
            Written by <em>{Note.username}</em> on <em>{Note.createdAt}</em>.
            Last updated on <em>{Note.updatedAt}</em>.
          </p>
        </div>
      </header>
      <article className="border rounded p-3 bg-light">{Note.content}</article>
    </section>
  );
};

export default NoteContent;
