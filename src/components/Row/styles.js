import styled from "styled-components";

export const StyledRow = styled.td`
  height: 40px;
  padding: 5px 10px 5px 10px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  color:  ${(props) => props.theme.colors.primary};
`;
