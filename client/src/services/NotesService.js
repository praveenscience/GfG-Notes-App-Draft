import Axios from "axios";
import APIHost from "./APIHost";

export const GetAllNotes = () => Axios.get(APIHost + "/api/notes");

export const CreateNote = Note => Axios.post(APIHost + "/api/notes", Note);

export const UpdateNote = (NoteID, Note) =>
  Axios.post(APIHost + "/api/notes/" + NoteID, Note);

export const DeleteNote = NoteID =>
  Axios.delete(APIHost + "/api/notes/" + NoteID);
