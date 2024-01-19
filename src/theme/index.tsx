import { createMuiTheme,ThemeProvider } from "@mui/material";


function ThemeProvider({Children}) {
    const THEME = createMuiTheme({
        typography: {
         "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
         "fontSize": 14,
         "fontWeightLight": 300,
         "fontWeightRegular": 400,
         "fontWeightMedium": 500
        }
     });
  return (
    <ThemeProvider theme={THEME}>
     {Children}
      </ThemeProvider>
  )
}

export default ThemeProvider
