import Axios from "axios";

export const AuthenticateUser = cred => Axios.post("/api/users/login", cred);
