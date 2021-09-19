import { render, screen } from '@testing-library/react';
import Form from './index';
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "../../theme";
import store from "../../redux/store"

test('renders the basic elements of a form', () => {

  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Form
          header="Reservar horário"
        >
          Nenhum horário disponível
        </Form>
      </ThemeProvider>
    </Provider>
  );

  expect(screen.getByText("Reservar horário")).toBeInTheDocument();

});
