import styled from 'styled-components';

export const StyledMenu = styled.div`
  height: 60px;
  width: 700px;
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
  : hover {
    color: ${(props) => props.theme.colors.secondary};
  };
`;
