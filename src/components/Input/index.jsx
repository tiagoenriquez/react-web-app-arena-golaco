import PropTypes from 'prop-types';

import { InputStyled } from './styles';

export default function Input({ type, value, onChange, placeholder }) {
  return (
    <InputStyled
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired
}
