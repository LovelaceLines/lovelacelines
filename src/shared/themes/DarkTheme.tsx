import { createTheme } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { commonTheme } from './ExtendsTheme';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...commonTheme,
    background: {
      paper: grey[900],
      default: blueGrey[800],
    },
    text: {
      primary: grey[50],
      secondary: grey[800],
    }
  }
});