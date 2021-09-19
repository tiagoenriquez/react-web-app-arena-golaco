import { render, screen } from '@testing-library/react';
import Buttons from './index';
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

test('renders a par of buttons', () => {

  function login() {
    console.log("Logado com sucesso");
  }

  function register() {
    console.log("Informe os seus dados");
  }

  render(
    <ThemeProvider theme={theme}>
      <Buttons
        loginLabel="Login"
        registerLabel="Cadastre-se"
        loginClick={login}
        registerClick={register}
      />
    </ThemeProvider>
  );

  expect(screen.getAllByRole("button")).toHaveLength(2);

});
