import Header from '../Header'

import { FormStyled } from './styles';

export default function Form({ children, header }) {
  return (
    <FormStyled>
      <Header>
        {header}
      </Header>
      {children}
    </FormStyled>
  );
}
