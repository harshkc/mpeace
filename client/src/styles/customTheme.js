import {createTheme} from "@material-ui/core/styles";

const customTheme = (darkMode) =>
  createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#448aff",
      },
      secondary: {
        main: darkMode ? "#64b5f6" : "#0d47a1",
      },
    },
  });

export default customTheme;
