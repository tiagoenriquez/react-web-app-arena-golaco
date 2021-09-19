import { render, screen } from '@testing-library/react';
import TableBody from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";

test('renders a tbody of a table', () => {

  render(
    <ThemeProvider theme={theme}>
      <table>
        <thead><tr><td>Data</td></tr></thead>
        <TableBody><tr><td>18/09/2021</td></tr></TableBody>
      </table>
    </ThemeProvider>
  );

  expect(screen.getByText("Data")).toBeInTheDocument();

});
