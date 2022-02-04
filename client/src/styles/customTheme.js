import {createTheme} from "@material-ui/core/styles";
// #09c1e2 #23a3de #4b85d9
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
    overrides: {
      MuiMenuItem: {
        root: {
          "&$selected": {
            borderRight: "4px solid #0277bd",
            fontWeight: "700",
          },
        },
      },
      MuiPopover: {
        paper: {
          borderRadius: 2,
        },
      },
      MuiButton: {
        root: {
          borderRadius: 4,
          textTransform: "none",
        },
      },
      MuiChip: {
        root: {
          borderRadius: 3,
          padding: "0px",
        },
        outlined: {
          backgroundColor: "#448aff15",
        },
      },
    },
    props: {
      MuiButton: {
        disableElevation: true,
      },
    },
  });

export default customTheme;
