import api from "../services/api";

class LoginProvider {

  constructor({ logingUser }) {
    this.response = api.post('usuario/login', logingUser);
  }

}

export default LoginProvider;
