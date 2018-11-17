import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Arial",
        "sans-serif"
      ].join(","),
      useNextVariants: true
    }
});
    
export default theme