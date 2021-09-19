import { render, screen } from '@testing-library/react';
import Input from './index';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

test('renders an input component', () => {

  function olaMundo() {
    console.log("Olá mundo");
  }

  render(
    <ThemeProvider theme={theme}>
      <Input
        type="text"
        onChange={olaMundo}
        placeholder="Olá mundo"
      />
    </ThemeProvider>
  );

  expect(screen.getByPlaceholderText("Olá mundo")).toBeInTheDocument();
});