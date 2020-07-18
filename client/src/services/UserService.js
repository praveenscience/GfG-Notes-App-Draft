export const GetUsers = () => fetch("/api/users.json").then(res => res.json());
