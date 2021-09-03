import styled from "styled-components";

export const StyledTableHead = styled.thead`
  border-bottom: 2px solid  ${(props) => props.theme.colors.primary};
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.secondary};
`;
