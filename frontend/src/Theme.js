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
      fontFamily: 'Space Grotesk',
    },
    button: {
      fontFamily: 'Space Grotesk',
      fontWeight: 800,
      textTransform: 'none',
    },
    h1: {
      fontFamily: 'Space Grotesk',
    },
    h2: {
      fontFamily: 'Space Grotesk',
      color: darkBlue,
      fontWeight: 800,
    },
    h3: {
      fontFamily: 'Space Grotesk',
    },
    h4: {
      fontFamily: 'Space Grotesk',
    },
    h5: {
      fontFamily: 'Space Grotesk',
    },
    h6: {
      fontFamily: 'Space Grotesk',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Space Grotesk',
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
