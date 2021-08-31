import { Component } from 'react';
import { format } from 'date-fns';

import Form from '../Form';
import DateSelector from '../DateSelector';
import { ReservationsListProvider } from '../../providers/reservationProvider';

export default class ReservationsList extends Component {

  state = { reservationsList: [], };

  async componentDidMount() {
    const formattedDate = format(new Date(), 'yyyy-MM-dd%');
    let response = await ReservationsListProvider({formattedDate});
    this.setState({ reservationsList: response.data });
  }

  render() {

    const { reservationsList } = this.state;

    return (
      <div>
        <Form header='Horários Reservados'>
          <DateSelector defaultValue={format(new Date(), 'yyyy-MM-dd')} />
          <table>
            <tr>
              <td>Início</td>
              <td>Fim</td>
              <td>Usuário</td>
            </tr>
            {
              reservationsList.map((reservation) =>
                <tr key={reservation.inicio}>
                  <td>{reservation.inicio.toString().substring(11, 19)}</td>
                  <td>{reservation.fim.toString().substring(11, 19)}</td>
                  <td>{reservation.usuario}</td>
                </tr>
            )}
          </table>
        </Form>
      </div>
    );
  }
  
}
