import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: colors.green[600] },
    secondary: { main: colors.lightBlue[500] },
    background: {
      paper: 'rgba(0,0,0,0.6)',
    },
  },
});
