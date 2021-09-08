import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Form from '../Form';
import ErrorMessageCard from '../ErrorMessageCard';
import Input from '../Input';
import Buttons from '../Buttons';
import LoginProvider from '../../providers/loginProvider';

import { setLogedUser } from '../../redux/modules/LogedUser';

export default function LoginForm({ registerClick }) {

  const [digitedEmail, setdigitedEmail] = useState("");
  const [digitedPassword, setDigitedPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const dispatch = useDispatch();

  const loginClick = async () => {
    let logingUser = { email: digitedEmail, senha: digitedPassword };
    try {
      let response = await LoginProvider({logingUser});
      dispatch(setLogedUser(response.data));
      setRedirect(true)
    } catch (err) {
      setInvalid(true);
    };
  }

  useEffect(() => console.log('LoginForm'), [redirect, invalid]);

  return (
    <>
      {redirect ? <Redirect to='/reserva' />
    :
      <div>
        <Form header="Login">
          {invalid && <ErrorMessageCard>CREDENCIAIS INVÁLIDAS</ErrorMessageCard>}
          <Input
            type="email"
            value={digitedEmail}
            onChange={(event) => setdigitedEmail(event.target.value )}
            placeholder="E-mail"
          />
          <Input
            type="password"
            value={digitedPassword}
            onChange={(event) => setDigitedPassword( event.target.value )}
            placeholder="Senha"
          />
          <Buttons
            loginLabel="Logar"
            registerLabel="Cadastrar-se"
            loginClick={loginClick}
            registerClick={registerClick}
          />
        </Form>
      </div>}
    </>
  );
}

LoginForm.propTypes = {
  registerClick: PropTypes.func.isRequired
}
