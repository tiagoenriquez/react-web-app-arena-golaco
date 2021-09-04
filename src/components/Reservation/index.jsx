import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import Form from '../Form';
import { Label } from '../ReservationsList/styles';
import Table from '../Table';
import Button from '../Button';

export default function Reservation() {

  const [possibleTimes, setPossibleTimes] = useState([]);
  const { logedUser } = useSelector((state) => state.logedUser);
  const { reservedTimes } = useSelector((state) => state.reservedTimes);

  const today = format(new Date(), 'yyyy-MM-dd');
  const now = format(new Date(), 'HH:mm:ss');

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
      {reservedTimes.date >= today ?
        <Table titles={[{name: 'Horários disponíveis'}]}>
          {
            possibleTimes.map((possibleTime) =>
              <tr key={possibleTime.time}>
                {
                  reservedTimes.date > today ||
                  parseInt(possibleTime.time.substring(0, 2)) > parseInt(now.substring(0, 2)) ?
                    <>
                      <td>{possibleTime.time}</td>
                      <Button onClick={() => console.log(`${possibleTime.time} ${reservedTimes.date} ${logedUser.nome}`)}>Reservar</Button>
                    </>
                  : null
                }
              </tr>
            )
          }
        </Table>
      :
        <Label>Data passada</Label>}  
      <button type='button' onClick={() => console.log(logedUser)}>Clique aqui</button>
    </Form>
  );
  
}
