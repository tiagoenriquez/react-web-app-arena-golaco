import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import Form from '../Form';
import SuccessMessageCard from '../SuccessMessageCard';
import Label from '../Label';
import Table from '../Table';
import Row from '../Row';
import { ReservationProvider } from '../../providers/reservationProvider';

import { setATimeWasReserved } from '../../redux/modules/ATimeWasReserved';

export default function Reservation({ id }) {

  const [possibleTimes, setPossibleTimes] = useState([]);
  const [timeWasReserved, setTimeWasReserved] = useState(false);
  const { logedUser } = useSelector((state) => state.logedUser);
  const { reservedTimes } = useSelector((state) => state.reservedTimes);

  const dispatch = useDispatch();

  const today = format(new Date(), 'yyyy-MM-dd');
  const now = format(new Date(), 'HH:mm:ss');

  function handleReservedTimes() {
    setTimeWasReserved(false);
    const allTimes = ['06:00:00', '08:00:00', '10:00:00', '12:00:00', '14:00:00', '16:00:00', '18:00:00', '20:00:00' ];
    let localPossibleTimes = [];
    allTimes.forEach((oneOfTheTimes) => {
      if (!reservedTimes.times.includes(oneOfTheTimes)) localPossibleTimes.push({ time: oneOfTheTimes });
    });
    setPossibleTimes(localPossibleTimes);
  }

  useEffect(handleReservedTimes, [reservedTimes]);

  async function reserve(time) {
    try {
      let datas = {
        inicio: `${reservedTimes.date} ${time}`,
        usuario_id: logedUser.id
      };
      let response = await ReservationProvider({datas});
      console.log(response.status);
      setTimeWasReserved(true);
      dispatch(setATimeWasReserved(true));
    } catch (err) {
      console.log(err.status);
    }
  }

  return (

    <div id={id}>
      <Form header="Reserve um horário">
        <Label>
            <b>Data:</b> {`${reservedTimes.date.substring(8, 10)}/${reservedTimes.date.substring(5, 7)}/${reservedTimes.date.substring(0, 4)}`}
          </Label>
          <Label>
            <b>Usuario:</b> {logedUser.nome}
        </Label>
        {reservedTimes.date >= today ?
          <>
            {timeWasReserved && <SuccessMessageCard>RESERVADO COM SUCESSO</SuccessMessageCard>}
            <Table titles={[{name: 'Horários disponíveis'}]}>
              {
                possibleTimes.map((possibleTime) =>
                  <tr key={possibleTime.time}>
                    {
                      reservedTimes.date > today ||
                      parseInt(possibleTime.time.substring(0, 2)) > parseInt(now.substring(0, 2)) ?
                        <>
                          <Row>
                            <div onClick={() => reserve(possibleTime.time)}>{possibleTime.time}</div>
                          </Row>
                        </>
                      : null
                    }
                  </tr>
                )
              }
            </Table>
          </>
        :
          <Label>Data passada</Label>}  
      </Form>
    </div>
  );
  
}
