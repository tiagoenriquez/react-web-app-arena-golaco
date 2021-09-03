import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import Form from '../Form';
import { DateSelector } from '../../components';
import Table from '../Table';
import { ReservationsListProvider } from '../../providers/reservationProvider';

import { setReservedTimes } from '../../redux/modules/ReservedTimes';

export default function ReservationsList() {

  const dispatch = useDispatch();

  const [reservationsList, setReservationsList] = useState([]);

  function getReservedTimes(datas) {
    return datas.map((data) => {
      return data.inicio.substring(11, 19);
    })
  }

  const listReservations = async (date) => {
    let formattedDate = date;
    let response = await ReservationsListProvider({formattedDate});
    setReservationsList(response.data);
    dispatch(setReservedTimes({
      times: getReservedTimes(response.data),
      date: date.replace('%', '')
    }));
  }

  useEffect(() => {
    async function list() {
      await listReservations;
    }
    list();
  });

  function chooseDate (event) {
    let day = event.target.value.substring(8, 10);
    let month = event.target.value.substring(5, 7);
    let year = event.target.value.substring(0, 4);
    let date = `${year}-${month}-${day}%`
    try{
      listReservations(date)
    } catch (err) {
      console.log(err);
    };
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
                <td>{reservation.inicio.toString().substring(11, 19)}</td>
                <td>{reservation.fim.toString().substring(11, 19)}</td>
                <td>{reservation.usuario}</td>
              </tr>
            )
          }
        </Table>
      </Form>
    </div>
  );
  
}
