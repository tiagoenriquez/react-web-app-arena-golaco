import { render, screen } from '@testing-library/react';
import Label from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

test('renders a label component', () => {

  render(
    <ThemeProvider theme={theme}>
      <Label>Olá mundo</Label>
    </ThemeProvider>
  );

  expect(screen.getByText("Olá mundo")).toBeInTheDocument();

});
