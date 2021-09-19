import { render, screen } from '@testing-library/react';
import Button from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

test('renders a button component', () => {

  function olaMundo() {
    console.log("Olá mundo!");
  }

  render(
    <ThemeProvider theme={theme}>
      <Button
        children="Olá Mundo"
        onClick={olaMundo}
      />
    </ThemeProvider>);

  expect(screen.getByRole("button")).toBeInTheDocument();

});
