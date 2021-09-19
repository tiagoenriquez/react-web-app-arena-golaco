import { render, screen } from '@testing-library/react';
import LoginForm from './index';
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../../redux/store";
import theme from "../../theme";

test('renders a login form', () => {

  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LoginForm registerClick={() => console.log("Usuário logado")} />
      </ThemeProvider>
    </Provider>
  );

  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toBeInTheDocument();
  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getAllByRole("button")).toHaveLength(2);
  expect(screen.getByText("Login")).toBeInTheDocument();
  expect(screen.getByText("Logar")).toBeInTheDocument();
  expect(screen.getByText("Cadastrar-se")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();

});
