import { useState, useEffect } from 'react';

import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

import { Buttons } from './styles';

export default function LoginForm({ loginClick, registerClick }) {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  return (
    <div>
      <Form header="Login">
        <Input
          type="text"
          value=""
          onChange={(event) => setUser({ email: event.target.value })}
          placeholder="E-mail"
        />
        <Input
          type="password"
          value=""
          onChange={(event) => setUser({ password: event.target.value })}
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
