import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import format from 'date-fns-tz/format';

import Form from '../Form';
import SuccessMessageCard from '../SuccessMessageCard';
import Label from '../Label';
import Table from '../Table';
import Row from '../Row';
import { ReservationsOfTheUserProvider, ReservationExclusionProvider } from '../../providers/reservationProvider';

import { setATimeWasReserved } from '../../redux/modules/ATimeWasReserved';

export default function ReservationExclusion({ id }) {

  const [reservationsList, setReservationsList] = useState([]);
  const [prevLogedUser, setPrevLogedUser] = useState({});
  const [reservationDeleted, setReservationDeleted] = useState(false);
  const { logedUser } = useSelector((state) => state.logedUser);
  const { aTimeWasReserved } = useSelector((state) => state.aTimeWasReserved);

  const dispatch = useDispatch();

  const today = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

  async function listReservations() {
    if (logedUser !== prevLogedUser || reservationDeleted || aTimeWasReserved) {
      let start = today;
      let logedUser_id = logedUser.id;
      let response = await ReservationsOfTheUserProvider({ logedUser_id, start });
      console.log(response.status);
      setReservationsList(response.data);
      setPrevLogedUser(logedUser);
      setReservationDeleted(false);
      dispatch(setATimeWasReserved(false));
    }
  }

  useEffect(() => {
    async function list() {
      await listReservations();
    }
    list();
  });

  async function deleteReservation(start) {
    let time = start.substring(11, 13);
    let date = `${start.substring(8, 10)}/${start.substring(5, 7)}/${start.substring(0, 4)}`;
    if (window.confirm(`Deseja mesmo desistir de usar a quadra às ${time} horas de ${date}?`)) {
      let response = await ReservationExclusionProvider({ start });
      console.log(response.status);
      setReservationDeleted(true);
      listReservations();
    }
  }
  
  return (
    <div id={id}>
      <Form header='Desistir de Reserva'>
        {reservationDeleted && <SuccessMessageCard>RESERVA EXCLUÍDA</SuccessMessageCard>}
        <Label><b>Usuário: </b>{logedUser.nome}</Label>
        {
          reservationsList.length !== 0 ?
            <Table titles={[{name: 'Data'}, {name: 'Início'}, {name: 'Fim'}]}>
              {
                reservationsList.map((reservation) =>
                  <tr key={reservation.inicio}>
                    <Row>
                      <div onClick={() => deleteReservation(reservation.inicio)}>
                        {
                          reservation.inicio.substring(8, 10) + '/' +
                          reservation.inicio.substring(5, 7) + '/' +
                          reservation.inicio.substring(0, 4)
                        }
                      </div>
                    </Row>
                    <Row>
                      <div onClick={() => deleteReservation(reservation.inicio)}>
                        {reservation.inicio.substring(11, 19)}
                      </div>
                    </Row>
                    <Row>
                      <div onClick={() => deleteReservation(reservation.inicio)}>
                        {reservation.fim.substring(11, 19)}
                      </div>
                    </Row>
                  </tr>
                )
            }
          </Table>
          : <Label>Usuário sem horários cadastrados</Label>
        }
      </Form>
    </div>
  );

}