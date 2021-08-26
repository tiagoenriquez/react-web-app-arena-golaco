import { HeaderStyled } from "./styles";

export default function Header({ children }) {
  return (
    <HeaderStyled>
      <h1>{children}</h1>
    </HeaderStyled>
  );
}
