import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    secondary: {
      light: '#757ce8',
      main: '#E26363',
      dark: '#002884',
      contrastText: '#fff',
    },
    primary: {
      light: '#f2cbbf',
      main: '#f56656',
      contrastText: '#fff',
    },
  },
  tyopography: {
    // Readex Pro added
    fontFmily: ['Readex Pro', 'sans-serif'].join(','),
    h3: {
      fontWeight: 'bold',
    },
    h4: {
      fontWeight: '800',
    },
    h5: {
      fontWeight: '800',
    },
    subtitle2: {
      fontWeight: 'bold',
    },
  },
});
