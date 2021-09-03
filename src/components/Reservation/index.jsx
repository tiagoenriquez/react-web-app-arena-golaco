import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import Form from '../Form';
import { Label } from '../ReservationsList/styles';
import Table from '../Table';

export default function Reservation() {

  const [possibleTimes, setPossibleTimes] = useState([]);

  const { logedUser } = useSelector((state) => state.logedUser);
  const { reservedTimes } = useSelector((state) => state.reservedTimes);

  function handleReservedTimes() {
    const allTimes = ['06:00:00', '08:00:00', '10:00:00', '12:00:00', '14:00:00', '16:00:00', '18:00:00', '20:00:00' ];
    let localPossibleTimes = [];
    allTimes.forEach((oneOfTheTimes) => {
      if (!reservedTimes.times.includes(oneOfTheTimes)) localPossibleTimes.push({ time: oneOfTheTimes });
    });
    setPossibleTimes(localPossibleTimes);
  }

  useEffect(handleReservedTimes, [reservedTimes]);

  return (
    <Form header="Reserve um horário">
      <Label>Data: {`${reservedTimes.date.substring(8, 10)}/${reservedTimes.date.substring(5, 7)}/${reservedTimes.date.substring(0, 4)}`}</Label>
      <Table titles={[{name: 'Horários disponíveis'}]}>
        {
          possibleTimes.map((possibleTime) =>
            <tr key={possibleTime.time}>
              <td>{possibleTime.time}</td>
            </tr>
          )
        }
      </Table>
      <button type='button' onClick={() => console.log(reservedTimes.date < format(new Date(), 'yyyy-MM-dd'))}>Clique aqui</button>
    </Form>
  );
  
}
