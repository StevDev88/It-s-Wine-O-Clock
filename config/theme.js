import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
palette: {
   primary: {
      main: '#800000',
   },
   secondary: {
     main: '#fff8dc',
   },
   error: {
   main: red.A400,
   },
  },
});
export default theme;