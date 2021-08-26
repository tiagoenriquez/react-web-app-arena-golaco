import styled from "styled-components";

export const InputStyled = styled.input`
  height: 40px;
  margin: 15px 30px 15px 30px;
  border-color:  ${(props) => props.theme.colors.primary};
  color:  ${(props) => props.theme.colors.primary};
`;
