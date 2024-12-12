import { ThemeProvider } from "@mui/material";
import "./App.css";
import AppRoutes from "./appRouting/AppRoutes";
import Theme from "./muiTheme/Theme";
import AlertsPopup from "./components/popups/AlertsPopup";

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <AppRoutes />
      <AlertsPopup />
    </ThemeProvider>
  );
}

export default App;
