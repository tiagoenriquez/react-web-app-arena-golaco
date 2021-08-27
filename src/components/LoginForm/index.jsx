import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

import Form from '../Form';
import Input from '../Input';
import Button from '../Button';
import LoginProvider from '../../providers/loginProvider';

import { Buttons } from './styles';

export default function LoginForm({ registerClick }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState({
    email: "",
    senha: ""
  });

  const loginClick = () => {
    setUser({
      email: email,
      senha: senha
    });
    console.log(user);
    let logedUser = new LoginProvider(user);
    if (logedUser.response.nome && logedUser.response.cpf && logedUser.response.telefone && logedUser.response.email && logedUser.response.senha) {
      return <Redirect to='reserva/' />
    }
  }

  useEffect(loginClick, [email, senha]);

  return (
    <div>
      <Form header="Login">
        <Input
          type="text"
          value={user.email}
          onChange={(event) => setEmail(event.target.value )}
          placeholder="E-mail"
        />
        <Input
          type="password"
          value={user.senha}
          onChange={(event) => setSenha( event.target.value )}
          placeholder="Senha"
        />
        <Buttons>
          <Button onClick={loginClick}>
            Logar
          </Button>
          <Button onClick={registerClick}>
            Cadastrar-se
          </Button>
        </Buttons>
      </Form>
    </div>
  );
}
