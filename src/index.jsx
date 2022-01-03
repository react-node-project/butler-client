import * as React from 'react';
import ReactDom from 'react-dom';
import App from './appss';
import { store } from './store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import CssBaseline from '@mui/material/CssBaseline';

// TODO:: 목서비스 워커 등록
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/handlers');
  worker
    .start({
      onUnhandledRequest: 'bypass',
    })
    .catch();
}

ReactDom.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root'),
);
