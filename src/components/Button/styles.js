import styled from "styled-components"

export const ButtonStyled = styled.button`
  height: 40px;
  width: 150px;
  margin: 15px 30px 15px 30px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  : hover {
    background-color: ${(props) => props.theme.colors.focusedPrimary};
  };
`;
