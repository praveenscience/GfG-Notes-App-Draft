import React from "react";
import { useRouteMatch } from "react-router-dom";
import NotesHome from "./_NotesHome";
import NoteContent from "./Note";
import NewNote from "./NewNote";
import EditNote from "./EditNote";

const NotesContainer = ({
  Notes,
  DelNote,
  LoggedIn,
  Deleted,
  CreateNote,
  UpdateNote
}) => {
  const urm = useRouteMatch();
  const isNew = urm.path === "/new";
  const isHome = urm.path === "/";
  const isEdit = urm.path.indexOf("/edit") > 0;

  const Note =
    !isHome && !isNew
      ? Notes.find(
          note => note.noteid === +urm.params.NoteID.replace("note-", "")
        )
      : null;
  const content = () => {
    switch (true) {
      case !isHome && !isNew && !!Note && !isEdit:
        return (
          <NoteContent DelNote={DelNote} Note={Note} LoggedIn={LoggedIn} />
        );
      case isEdit:
        return Note ? (
          <EditNote LoggedIn={LoggedIn} Note={Note} UpdateNote={UpdateNote} />
        ) : null;
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
