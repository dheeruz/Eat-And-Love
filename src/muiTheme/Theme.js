import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#442a00",
    },
    secondary: {
      main: "#d84012",
    },
    common: {
      white: "#ffffff",
      fontColor: "#3a3a3a",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontFamily: "Ahsing, sans-serif",
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "var(--font-color)",
    },
    h2: {
      fontFamily: "Ahsing, sans-serif",
      fontSize: "2rem",
      fontWeight: 600,
      color: "var(--font-color)",
    },
    button: {
      textTransform: "capitalize",
      fontSize: "1rem",
    },
    pageBanner: {
      fontSize: { xs: "42px", md: "58px" },
      fontFamily: "Ahsing, sans-serif",
      color: 'white',
    },
  },
});

export default Theme;
