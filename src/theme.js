import { createMuiTheme } from '@material-ui/core/styles';
import { red, lime } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: lime[300],
    },
    secondary: {
      main: '#FF5722',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
