import { render, screen } from '@testing-library/react';
import Row from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

test('renders a row a table', () => {

  render(
    <ThemeProvider theme={theme}>
      <table>
        <tbody></tbody>
        <thead><tr><Row>16/09/2021</Row></tr></thead>
      </table>
    </ThemeProvider>
  );

  expect(screen.getByText("16/09/2021")).toBeInTheDocument();

});
