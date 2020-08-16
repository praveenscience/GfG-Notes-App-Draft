import React from "react";
import { useRouteMatch } from "react-router-dom";
import NotesHome from "./_NotesHome";
import NoteContent from "./Note";
import NewNote from "./NewNote";

const NotesContainer = ({ Notes, DelNote, LoggedIn, Deleted, CreateNote }) => {
  const urm = useRouteMatch();
  const isNew = urm.path === "/new";
  const isHome = urm.path === "/";
  const Note =
    !isHome && !isNew
      ? Notes.find(
          note => note.noteid === +urm.params.NoteID.replace("note-", "")
        )
      : null;
  const content = () => {
    switch (true) {
      case !isHome && !isNew && !!Note:
        return (
          <NoteContent DelNote={DelNote} Note={Note} LoggedIn={LoggedIn} />
        );
      case isHome:
        return <NotesHome />;
      case isNew:
        return <NewNote LoggedIn={LoggedIn} CreateNote={CreateNote} />;
      default:
        return <NotesHome is404={true} Deleted={Deleted} />;
    }
  };
  return <div className="NotesContainer col-10">{content()}</div>;
};

export default NotesContainer;
