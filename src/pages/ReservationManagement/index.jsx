
import { Menu, ReservationsList, Reservation, ReservationExclusion } from '../../components';

import { StyledReservationManagement } from './styles';

export default function ReservationManagement () {

  return (
    <StyledReservationManagement>
      <Menu />
      <ReservationsList id='lista-de-reserva' />
      <Reservation id='reserve-um-horario' />
      <ReservationExclusion id='desistir-de-reserva' />
    </StyledReservationManagement>
  );
}
