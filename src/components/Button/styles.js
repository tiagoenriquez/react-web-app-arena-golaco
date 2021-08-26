import styled from "styled-components"

export const ButtonStyled = styled.button`
  height: 40px;
  width: 12vw;
  background-color:  ${(props) => props.theme.colors.primary};
  color: white;
  : hover {
    background-color:  ${(props) => props.theme.colors.focusedPrimary};
  };
`;
