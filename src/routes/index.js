import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main, ReservationManagement, NotFound } from '../pages';

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/reserva'>
          <ReservationManagement />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}