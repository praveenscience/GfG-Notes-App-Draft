import React from "react";
import { useRouteMatch } from "react-router-dom";
import NotesHome from "./_NotesHome";
import NoteContent from "./Note";

const NotesContainer = ({ Notes, DelNote, LoggedIn, Deleted }) => {
  const urm = useRouteMatch();
  const isHome = urm.path === "/";
  const Note = !isHome
    ? Notes.find(
        note => note.noteid === +urm.params.NoteID.replace("note-", "")
      )
    : null;
  return (
    <div className="NotesContainer col-10">
      {!isHome && Note ? (
        <NoteContent DelNote={DelNote} Note={Note} LoggedIn={LoggedIn} />
      ) : isHome ? (
        <NotesHome />
      ) : (
        <NotesHome is404={true} Deleted={Deleted} />
      )}
    </div>
  );
};

export default NotesContainer;
