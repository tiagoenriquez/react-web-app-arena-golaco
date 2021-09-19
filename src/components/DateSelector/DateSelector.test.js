import { render, screen, fireEvent } from '@testing-library/react';
import DateSelector from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

test('renders a date selector component', () => {

  var date = "2021-09-18";

  render(
    <ThemeProvider theme={theme}>
      <DateSelector
        defaultValue={date}
        onChange={() => date = "2021-09-19"}
        hidden={true}
      />
    </ThemeProvider>
  );

  expect(screen.getByDisplayValue("2021-09-18")).toBeInTheDocument();

});
