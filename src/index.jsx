import * as React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';

ReactDom.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root'),
);
