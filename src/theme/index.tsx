import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#9E000A',
            main: '#690809',
            
        },
        secondary: {
            main: '#FFF',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        text: {
            primary: '#2f2f2f'
        }     
    },
    props: {
        MuiContainer: {
            maxWidth: 'lg'
        }
    }
});

export default theme;