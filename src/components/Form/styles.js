import styled from "styled-components";

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 400px;
  justify-content: center;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  margin-left: 30px;
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.primary};
`;
