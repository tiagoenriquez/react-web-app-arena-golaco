import { useState } from 'react';

import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

import { ButtonStyle } from './styles';

export default function UserRegistrationForm() {

  const [user, setUser] = useState({
    name: "",
    cpf: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });
  
  return (
    <div>
      <Form header="Cadastro de usuário">
        <Input
          type="text"
          value={user.name}
          onChange={(event) => setUser({ name: event.target.value })}
          placeholder="Nome"
        />
        <Input
          type="text"
          value={user.cpf}
          onChange={(event) => setUser({ cpf: event.target.value })}
          placeholder="CPF"
        />
        <Input
          type="text"
          value={user.phone}
          onChange={(event) => setUser({ phone: event.target.value })}
          placeholder="Telefone"
        />
        <Input
          type="text"
          value={user.email}
          onChange={(event) => setUser({ email: event.target.value })}
          placeholder="E-mail"
        />
        <Input
          type="password"
          value={user.password}
          onChange={(event) => setUser({ password: event.target.value })}
          placeholder="Senha"
        />
        <Input
          type="password"
          value={user.passwordConfirm}
          onChange={(event) => setUser({ passwordConfirm: event.target.value })}
          placeholder="Confirme sua senha"
        />
        <ButtonStyle>
          <Button>
            Cadastrar-se
          </Button>
        </ButtonStyle>
      </Form>
    </div>
  );
}
