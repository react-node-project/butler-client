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
    h5: {
      fontWeight: 'bold',
    },
    subtitle2: {
      fontWeight: 'bold',
    },
  },
});
