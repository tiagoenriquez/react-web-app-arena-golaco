import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Menu, ReservationsList, Reservation, ReservationExclusion } from '../../components';

import { StyledReservationManagement } from './styles';

export default function ReservationManagement () {

  const { logedUser } = useSelector((state) => state.logedUser);
  const links = ['#lista-de-reservas', '#reserve-um-horario', '#desistir-de-reserva'];

  return (
    <>
      {
        logedUser ?
          <StyledReservationManagement>
            <Menu links={links} />
            <ReservationsList id='lista-de-reservas' />
            <Reservation id='reserve-um-horario' />
            <ReservationExclusion id='desistir-de-reserva' />
          </StyledReservationManagement>
        : <Redirect to='/' />
      }
    </>
  );
}
