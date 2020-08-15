import Axios from "axios";

export const GetAllNotes = () => Axios.get("/api/notes");
