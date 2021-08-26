import { useState } from 'react';

import { LoginForm } from '../../components'
import { UserRegistrationForm } from '../../components'
import { MainStyled } from './styles';

export default function Main () {

  const [openedForm, setOpenedForm] = useState('login');

    return (
      <MainStyled>
        {openedForm === 'login' ?
          <LoginForm
            loginClick={() => setOpenedForm('login')}
            registerClick={() => setOpenedForm('register')}
          />
        :
          <UserRegistrationForm/>}
      </MainStyled>
    );
}