import styled from 'styled-components';

export const StyledMenu = styled.div`
  height: 40px;
  width: 768px;
  margin: 15px 30px 15px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: white;
`;
