import api from "../services/api";

export default function LoginProvider ({logingUser}) {

  const response = api.post('usuario/login', logingUser);

  return response;

}
