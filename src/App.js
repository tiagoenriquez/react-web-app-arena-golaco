import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { Provider } from 'react-redux';

import theme from './theme';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>    
  );
}

export default App;
