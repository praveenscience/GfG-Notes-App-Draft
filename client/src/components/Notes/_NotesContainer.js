import React from "react";
import { useRouteMatch } from "react-router-dom";
import NotesHome from "./_NotesHome";
import NoteContent from "./Note";

const NotesContainer = ({ Notes }) => {
  const urm = useRouteMatch();
  const isHome = urm.path === "/";
  const Note = !isHome ? Notes[+urm.params.NoteID.replace("note-", "")] : null;
  return (
    <div className="NotesContainer col-10">
      {!isHome && Note ? <NoteContent Note={Note} /> : <NotesHome />}
    </div>
  );
};

export default NotesContainer;
