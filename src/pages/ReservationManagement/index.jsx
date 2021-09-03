import { ReservationsList } from '../../components';
import { Reservation } from '../../components';

import { StyledReservationManagement } from './styles';

export default function ReservationManagement () {

  return (
    <StyledReservationManagement>
      <ReservationsList />
      <Reservation />
    </StyledReservationManagement>
  );
}
