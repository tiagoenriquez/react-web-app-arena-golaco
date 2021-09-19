import { render, screen } from '@testing-library/react';
import UserRegistrationForm from './index';
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../../redux/store";
import theme from "../../theme";

test('renders a form to insert an user', () => {

  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <UserRegistrationForm />
      </ThemeProvider>
    </Provider>
  );
  
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toBeInTheDocument();
  expect(screen.getAllByRole("textbox")).toHaveLength(4);
  expect(screen.getAllByRole("button")).toHaveLength(2);
  expect(screen.getByText("Cadastro de usuário")).toBeInTheDocument();
  expect(screen.getByText("Logar")).toBeInTheDocument();
  expect(screen.getByText("Cadastrar-se")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("CPF")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Telefone com código da cidade")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Confirme sua senha")).toBeInTheDocument();
});
