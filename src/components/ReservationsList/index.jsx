import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import Form from '../Form';
import DateSelector from '../DateSelector';
import Table from '../Table';
import Row from '../Row';
import { ReservationsListProvider } from '../../providers/reservationProvider';

import { setReservedTimes } from '../../redux/modules/ReservedTimes';

export default function ReservationsList() {

  const dispatch = useDispatch();

  const [formattedDate, setFormattedDate] = useState(format(new Date(), 'yyyy-MM-dd%'));
  const [prevFormattedDate, setPrevFormattedDate] = useState('');
  const [reservationsList, setReservationsList] = useState([]);

  function getReservedTimes(datas) {
    return datas.map((data) => {
      return data.inicio.substring(11, 19);
    })
  }

  async function listReservations () {
    if (formattedDate !== prevFormattedDate) {
      let response = await ReservationsListProvider({ formattedDate });
      console.log(response);
      setPrevFormattedDate(formattedDate);
      setReservationsList(response.data);
      dispatch(setReservedTimes({
        times: getReservedTimes(response.data),
        date: formattedDate.replace('%', '')
      }))
    };
  }

  useEffect(() => {
    async function list() {
      try{
        await listReservations();
      } catch (err) {
        console.log(err);
      }
    }
    list();
  });

  function chooseDate (event) {
    let day = event.target.value.substring(8, 10);
    let month = event.target.value.substring(5, 7);
    let year = event.target.value.substring(0, 4);
    setFormattedDate(`${year}-${month}-${day}%`);
  }

  return (
    <div>
      <Form header='Horários Reservados'>
        <DateSelector
          defaultValue={format(new Date(), 'yyyy-MM-dd')}
          onChange={chooseDate}
        />
        <Table titles={[{name: 'Início'}, {name: 'Fim'}, {name: 'Usuário'}]}>
          {
            reservationsList.map((reservation) =>
              <tr key={reservation.inicio}>
                <Row>{reservation.inicio.toString().substring(11, 19)}</Row>
                <Row>{reservation.fim.toString().substring(11, 19)}</Row>
                <Row>{reservation.usuario}</Row>
              </tr>
            )
          }
        </Table>
      </Form>
    </div>
  );
  
}
