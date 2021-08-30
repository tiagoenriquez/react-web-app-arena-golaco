import { useEffect, useState } from 'react';

import Form from '../Form';
import ErrorMessageCard from '../ErrorMessageCard';
import SuccessMessageCard from '../SuccessMessageCard';
import Input from '../Input';
import Buttons from '../Buttons';
import UserProvider from '../../providers/userProvider';

export default function UserRegistrationForm() {

  const [digitedName, setDigitedName] = useState("");
  const [editedCpf, setEditedCpf] = useState("");
  const [editedPhone, seteditedPhone] = useState("");
  const [digitedEmail, setDigitedEmail] = useState("");
  const [digitedPassword, setDigitedPassword] = useState("");
  const [digitedConfirmedPassword, setDigitedConfirmedPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      (digitedPhone.length === 7 && digitedPhone[3] !== "9") || 
      (digitedPhone.length === 8 && digitedPhone[3] === "9")
    ) {
      digitedPhone += "-";
    }
    seteditedPhone(digitedPhone);
  }

  const editErrorMessage = () => {
    if (!digitedName) return 'CAMPO NOME VAZIO';
    if (editedCpf.length !== 14) return 'CPF INVÁLIDO';
    if (
      !(editedPhone.length === 12 && editedPhone[3] !== "9") && 
      !(editedPhone.length === 13 && editedPhone[3] === "9")
    ) {
      return 'TELEFONE INVÁLIDO';
    }
    if (!digitedEmail.includes('@')) return 'E-MAIL INVÁLIDO';
    if (!digitedPassword) return 'CAMPO SENHA NÃO PREENCHIDO';
    if (digitedPassword !== digitedConfirmedPassword) return 'SENHAS NÃO CONFEREM';
    return 'ERRO AO CADASTRAR O USUÁRIO';
  }

  const registerClick = async () => {
    let registratingUser = {};
    if (
      editedCpf.length === 14 && (
      (editedPhone.length === 12 && editedPhone[3] !== "9") || 
      (editedPhone.length === 13 && editedPhone[3] === "9")
      )
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
      setRegistered(true);
    } catch (err) {
      setErrorMessage(editErrorMessage());
      setInvalid(true);
    }
  }

  useEffect(() => console.log(invalid+ " " + registered), [invalid, registered]);

  const goToLogin = () => window.location.reload();
  
  return (
    <>
      <Form header="Cadastro de usuário">
        {invalid && <ErrorMessageCard>{errorMessage}</ErrorMessageCard>}
        {registered && <SuccessMessageCard>USUÁRIO CADASTRADO</SuccessMessageCard>}
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
        <Buttons
          loginLabel="Logar"
          registerLabel="Cadastrar-se"
          loginClick={goToLogin}
          registerClick={registerClick}
        />
      </Form>
    </>
  );
}
