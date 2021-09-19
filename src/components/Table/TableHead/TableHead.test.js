import { render, screen } from '@testing-library/react';
import TableHead from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";

test('renders a thead of a table', () => {

  const testTitles = [{name: "Olá Mundo"}]

  render(
    <ThemeProvider theme={theme}>
      <table>
        <TableHead titles={[{name: "Olá Mundo"}]} />
        <tbody><tr><td></td></tr></tbody>
      </table>
    </ThemeProvider>
  );

  expect(screen.getByText("Olá Mundo")).toBeInTheDocument();

});
