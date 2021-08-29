import api from "../services/api";

export default function UserProvider ({registratingUser}) {

  const response = api.post('usuario', registratingUser);

  return response;

}
