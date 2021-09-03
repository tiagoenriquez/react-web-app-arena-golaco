import styled from "styled-components";

export const StyledLabelDate = styled.label`
  height: 20px;
  margin: 0px 30px 0px 30px;
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledDateSelector = styled.input`
  height: 40px;
  margin: 15px 30px 15px 30px;
  border-color:  ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
`;
