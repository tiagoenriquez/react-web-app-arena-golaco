import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Form from '../Form';
import ErrorMessageCard from '../ErrorMessageCard';
import Input from '../Input';
import Button from '../Button';
import UserProvider from '../../providers/userProvider';

import { ButtonStyle } from './styles';

export default function UserRegistrationForm() {

  const [digitedName, setDigitedName] = useState("");
  const [editedCpf, setEditedCpf] = useState("");
  const [editedPhone, seteditedPhone] = useState("");
  const [digitedEmail, setDigitedEmail] = useState("");
  const [digitedPassword, setDigitedPassword] = useState("");
  const [digitedConfirmedPassword, setDigitedConfirmedPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [invalid, setInvalid] = useState(false);

  let digitedCpf = "";
  let digitedPhone = ""

  const validateCpf = (event) => {
    digitedCpf += event;
    if (digitedCpf.length === 3 || digitedCpf.length === 7) digitedCpf += ".";
    if (digitedCpf.length === 11) digitedCpf += "-";
    setEditedCpf(digitedCpf);
  }

  const validatePhone = (event) => {
    digitedPhone += event;
    if (digitedPhone.length === 2) digitedPhone += " ";
    if (
      digitedPhone.length === 7 && digitedPhone[3] !== "9" || 
      digitedPhone.length === 8 && digitedPhone[3] === "9"
    ) {
      digitedPhone += "-";
    }
    seteditedPhone(digitedPhone);
  }

  const registerClick = async () => {
    let registratingUser = {};
    if (
      digitedName && 
      editedCpf.length == 14 && (
      editedPhone.length === 12 && editedPhone[3] !== "9" || 
      editedPhone.length === 13 && editedPhone[3] === "9"
      ) &&
      digitedEmail &&
      digitedPassword &&
      digitedConfirmedPassword === digitedPassword
    ) {
      registratingUser = {
        nome: digitedName,
        cpf: editedCpf,
        telefone: editedPhone,
        email: digitedEmail,
        senha: digitedPassword,
        senhaConfirmacao: digitedConfirmedPassword
      };
    } 
    console.log(registratingUser);
    try {
      let response = await UserProvider({registratingUser});
      console.log(response);
      setRedirect(true);
    } catch (err) {
      setInvalid(true);
    }
  }

  useEffect(() => console.log(redirect + " " + invalid), [redirect, invalid]);
  
  return (
    <>
      {redirect ? <Redirect to='/' />
    :
      <div>
        <Form header="Cadastro de usuário">
          {invalid && <ErrorMessageCard>ERRO AO CADASTRAR O USUÁRIO</ErrorMessageCard>}
          <Input
            type="text"
            value={digitedName}
            onChange={(event) => setDigitedName(event.target.value)}
            placeholder="Nome"
          />
          <Input
            type="text"
            value={editedCpf}
            onChange={(event) => validateCpf(event.target.value)}
            placeholder="CPF"
          />
          <Input
            type="text"
            value={editedPhone}
            onChange={(event) => validatePhone(event.target.value)}
            placeholder="Telefone com código da cidade"
          />
          <Input
            type="email"
            value={digitedEmail}
            onChange={(event) => setDigitedEmail(event.target.value)}
            placeholder="E-mail"
          />
          <Input
            type="password"
            value={digitedPassword}
            onChange={(event) => setDigitedPassword(event.target.value)}
            placeholder="Senha"
          />
          <Input
            type="password"
            value={digitedConfirmedPassword}
            onChange={(event) => setDigitedConfirmedPassword(event.target.value)}
            placeholder="Confirme sua senha"
          />
          <ButtonStyle>
            <Button onClick={registerClick}>
              Cadastrar-se
            </Button>
          </ButtonStyle>
        </Form>
      </div>}
    </>
  );
}
