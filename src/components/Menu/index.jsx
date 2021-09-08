import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import Button from '../Button';
import { StyledMenu, StyledLink } from './styles';

import { setLogedUser } from '../../redux/modules/LogedUser';

export default function Menu({ links }) {
  
  const dispatch = useDispatch();

  function logout() {
    dispatch(setLogedUser(null));
  }

  return (
    <StyledMenu>
      <StyledLink href={links[0]}>
        Lista de Reservas
      </StyledLink>
      <StyledLink href={links[1]}>
        Reserve um horário
      </StyledLink>
      <StyledLink href={links[2]}>
        Desistir de reserva
      </StyledLink>
      <Button onClick={logout}>
        Sair
      </Button>
    </StyledMenu>
  );

}

Menu.propTypes = {
  links: PropTypes.array
}
