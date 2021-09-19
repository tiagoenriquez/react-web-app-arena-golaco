import { render, screen } from '@testing-library/react';
import Menu from './index';
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../../redux/store";
import theme from '../../theme';

test('renders the menu', () => {

  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Menu links={["#list", "#register", "#cancel"]}/>
      </ThemeProvider>
    </Provider>
  );

  expect(screen.getByText("Lista de Reservas")).toBeInTheDocument();
  expect(screen.getByText("Reserve um horário")).toBeInTheDocument();
  expect(screen.getByText("Desistir de reserva")).toBeInTheDocument();
  expect(screen.getByText("Sair")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});
