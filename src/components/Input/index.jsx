import { InputStyled } from './styles';

export default function Input({ type, value, placeholder }) {
  return (
    <InputStyled
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
}
