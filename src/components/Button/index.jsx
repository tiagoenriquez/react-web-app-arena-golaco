import PropTypes from 'prop-types';

import { ButtonStyled } from "./styles";

export default function Button({ children, onClick }) {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
}
