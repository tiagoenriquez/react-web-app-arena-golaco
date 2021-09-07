import Button from '../Button';

import { StyledMenu, StyledLink } from './styles';

export default function Menu() {

  return (
    <StyledMenu>
      <StyledMenu>
        <StyledLink href='#lista-de-reservas'>
          Lista de Reservas
        </StyledLink>
        <StyledLink href='#reserve-um-horario'>
          Reserve um horário
        </StyledLink>
        <StyledLink href='#desistir-de-reserva'>
          Desistir de reserva
        </StyledLink>
      </StyledMenu>
      <Button>Sair</Button>
    </StyledMenu>
  );

}
