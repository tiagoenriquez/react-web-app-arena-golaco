import { render, screen } from '@testing-library/react';
import SuccessMessageCard from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

test('renders a label with a success message', () => {

  render(
    <ThemeProvider theme={theme}>
      <SuccessMessageCard>Testado com sucesso</SuccessMessageCard>
    </ThemeProvider>
  );

  expect(screen.getByText("Testado com sucesso")).toBeInTheDocument();

});
