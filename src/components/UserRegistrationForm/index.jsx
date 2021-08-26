import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

import { ButtonStyle } from './styles';

export default function UserRegistrationForm() {
  return (
    <div>
      <Form header="Cadastro de usuário">
        <Input
          type="text"
          value=""
          placeholder="Nome"
        />
        <Input
          type="text"
          value=""
          placeholder="CPF"
        />
        <Input
          type="text"
          value=""
          placeholder="Telefone"
        />
        <Input
          type="text"
          value=""
          placeholder="E-mail"
        />
        <Input
          type="password"
          value=""
          placeholder="Senha"
        />
        <Input
          type="password"
          value=""
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
