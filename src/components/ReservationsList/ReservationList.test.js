import { render, screen } from '@testing-library/react';
import ReservationList from './index';
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../../redux/store";
import theme from "../../theme";

test('renders a list of reservations form', () => {

  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ReservationList id="Lista de reservas" />
      </ThemeProvider>
    </Provider>
  );

  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toBeInTheDocument();
  expect(screen.getByRole("table")).toBeInTheDocument();
  expect(screen.getByRole("row")).toBeInTheDocument();
  expect(screen.getAllByRole("rowgroup")).toHaveLength(2);
  expect(screen.getAllByRole("cell")).toHaveLength(3);
  expect(screen.getByText("Horários Reservados")).toBeInTheDocument();
  expect(screen.getByText("Escolha uma data")).toBeInTheDocument();
  expect(screen.getByText("Início")).toBeInTheDocument();
  expect(screen.getByText("Fim")).toBeInTheDocument();
  expect(screen.getByText("Usuário")).toBeInTheDocument();

});
