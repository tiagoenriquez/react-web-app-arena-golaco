import { useSelector } from 'react-redux';

import Form from '../Form';

export default function ReservationExclusion() {

  const { logedUser } = useSelector((state) => state.logedUser);
  
  return (
    <Form header='Desistir de Reserva'>
      <div>{logedUser.nome}</div>
    </Form>
  );

}