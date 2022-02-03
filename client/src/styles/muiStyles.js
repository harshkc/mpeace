import {makeStyles} from "@material-ui/core/styles";

export const useBodyStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100vW",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      minHeight: "100vH",
    },
  }),
  {index: 1}
);

export const useNavStyles = makeStyles(
  (theme) => ({
    leftPortion: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
    },
    logoWrapper: {
      marginRight: "1em",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        alignItems: "center",
      },
    },
    logo: {
      fontFamily: "Montserrat",
      textTransform: "none",
      fontSize: "1.3em",
      padding: "0.1em",
      marginRight: "0.3em",
    },
    contentContainer: {
      display: "flex",
      alignItems: "center",
    },
    appBar: {
      borderBottom: "4px solid #F4649F",
    },
    searchBar: {
      flexGrow: 0.6,
      [theme.breakpoints.down("xs")]: {
        flexGrow: 1,
        marginLeft: "0.6em",
        marginRight: "0.6em",
      },
    },
    searchBtn: {
      padding: "0.2em",
    },
    iconBtn: {
      [theme.breakpoints.down("xs")]: {
        padding: "0.2em",
      },
    },
  }),
  {index: 1}
);

export const useMenuStyles = makeStyles(
  (theme) => ({
    menuIcon: {
      marginRight: "6px",
      fontSize: "1.3em",
    },
    closeIcon: {
      boxSizing: "border-box",
      border: `0.5px solid ${theme.palette.primary.main}60`,
      borderRadius: 3,
    },
    rootPanel: {
      position: "sticky",
      top: "5.5vH",
      display: "flex",
      minHeight: "94.5vh",
    },
    list: {
      marginTop: "1em",
      minWidth: "10vw",
    },
    madeByItem: {
      padding: "0.4em 0.8em 0.2em 0.8em",
    },
    userBtn: {
      textTransform: "none",
      display: "flex",
    },
    avatar: {
      width: theme.spacing(3.5),
      height: theme.spacing(3.5),
      marginRight: "0.4em",
      borderRadius: 2,
      [theme.breakpoints.down("xs")]: {
        marginRight: "0.2em",
        width: theme.spacing(2.8),
        height: theme.spacing(2.8),
      },
    },
    moreBtn: {
      padding: "0.2em",
    },
    userBtnMob: {
      padding: "0.3em",
    },
  }),
  {index: 1}
);
