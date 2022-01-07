import { createTheme } from '@mui/material/styles';
import { orange, darkBlue, white } from './Colors';

export const theme = createTheme({
  palette: {
    primary: { 
      main: orange 
    },
    secondary: {
      main: darkBlue,
      contrastText: white,
    },
  },
  typography: {
    body1: {
      fontFamily: 'Montserrat',
    },
    button: {
      fontFamily: 'Montserrat',
      fontWeight: 800,
      textTransform: 'none',
    },
    h1: {
      fontFamily: 'Montserrat',
    },
    h2: {
      fontFamily: 'Montserrat',
      color: darkBlue,
      fontWeight: 800,
    },
    h3: {
      fontFamily: 'Montserrat',
    },
    h4: {
      fontFamily: 'Montserrat',
    },
    h5: {
      fontFamily: 'Montserrat',
    },
    h6: {
      fontFamily: 'Montserrat',
    },
    body2: {
      fontFamily: 'Montserrat',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        height: '80px',
      },
    },
  },
});
