import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main, Reservation, NotFound } from '../pages';

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/reserva'>
          <Reservation />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}