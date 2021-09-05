import { ReservationsList } from '../../components';
import { Reservation } from '../../components';
import { ReservationExclusion } from '../../components';

import { StyledReservationManagement } from './styles';

export default function ReservationManagement () {

  return (
    <StyledReservationManagement>
      <ReservationsList />
      <Reservation />
      <ReservationExclusion />
    </StyledReservationManagement>
  );
}
