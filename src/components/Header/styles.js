import styled from "styled-components"

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.primary};
`;
