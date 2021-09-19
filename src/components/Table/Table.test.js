import { render, screen } from '@testing-library/react';
import Table from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../theme"

test('renders table component', () => {

  const testTitles = [{name: "Data"}]

  render(
    <ThemeProvider theme={theme}>
      <Table titles={testTitles}>
        <tr><td>18/09/2021</td></tr>
      </Table>
    </ThemeProvider>
  );

  expect(screen.getByText("Data")).toBeInTheDocument();
  expect(screen.getByText("18/09/2021")).toBeInTheDocument();

});
