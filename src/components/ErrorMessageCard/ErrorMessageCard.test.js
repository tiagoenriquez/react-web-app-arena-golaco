import { render, screen } from '@testing-library/react';
import ErrorMessageCard from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

test('renders a label with an error message', () => {

  render(
    <ThemeProvider theme={theme}>
      <ErrorMessageCard>Erro ao testar módulo</ErrorMessageCard>
    </ThemeProvider>
  );

  expect(screen.getByText("Erro ao testar módulo")).toBeInTheDocument();

});
