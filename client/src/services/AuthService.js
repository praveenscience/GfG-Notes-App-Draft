import Axios from "axios";
import APIHost from "./APIHost";

export const AuthenticateUser = cred =>
  Axios.post(APIHost + "/api/users/login", cred);

export const LogoutUser = () => Axios.post(APIHost + "/api/users/logout");

export const RegisterUser = data =>
  Axios.post(APIHost + "/api/users/new", data);

export const GetActiveUser = () => Axios.get(APIHost + "/api/users/login");
